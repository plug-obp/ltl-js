import LTLParser from '../generated/grammar/LTLParser.js';
import LTLListener from '../generated/grammar/LTLListener.js';
import * as stx from './LTLSyntaxModel.js';

export class LTLSyntaxBuilder extends LTLListener {
    constructor() {
        super();
        this.map = new Map();
        this.tree = null;
    }

    setValue(key, value) {
        this.map.set(key, value);
    }

    getValue(key) {
        return this.map.get(key);
    }

    exitLiteral(ctx) {
        this.setValue(ctx, ctx.TRUE() == null ? new stx.LTLFalse() : new stx.LTLTrue());
    }

    exitAtom(ctx) {
        const value = ctx.ATOMINLINE().getText();
        const delimiter = value.substring(0, 1);
        let atom = value.substring(1, value.length - 1);
        switch (delimiter) {
        case '|':
            atom = atom.replace(/\\\|/g, '|');
            break;
        case '"':
            atom = atom.replace(/\\"/g, '"');
            break;
        case "[":
            atom = atom.replace(/\\\[/g, '[');
            atom = atom.replace(/\\\]/g, ']');
            break;
        }
        this.setValue(ctx, new stx.LTLAtom(atom, delimiter));
    }

    exitLiteralExp(ctx) {
        this.setValue(ctx, this.getValue(ctx.literal()));
    }

    exitUnaryExp(ctx) {
        const operator = ctx.operator.text;
        const expression = this.getValue(ctx.formula());
        let unaryExpression = null;
        switch (ctx.operator.type) {
            case LTLParser.NEGATION:
                unaryExpression = new stx.LTLNegation(operator, expression);
                break;
            case LTLParser.NEXT:
                unaryExpression = new stx.LTLNext(operator, expression);
                break;
            case LTLParser.EVENTUALLY:
                unaryExpression = new stx.LTLEventually(operator, expression);
                break;
            case LTLParser.GLOBALLY:
                unaryExpression = new stx.LTLGlobally(operator, expression);
                break;
        }
        this.setValue(ctx, unaryExpression);
    }

    exitBinaryExp(ctx) {
        const operator = ctx.operator.text;
        const left = this.getValue(ctx.formula(0));
        const right = this.getValue(ctx.formula(1));
        let binaryExpression = null;
        switch (ctx.operator.type) {
            case LTLParser.CONJUNCTION:
                binaryExpression = new stx.LTLConjunction(operator, left, right);
                break;
            case LTLParser.DISJUNCTION:
                binaryExpression = new stx.LTLDisjunction(operator, left, right);
                break;
            case LTLParser.XOR:
                binaryExpression = new stx.LTLExclusiveDisjunction(operator, left, right);
                break;
            case LTLParser.IMPLICATION:
                binaryExpression = new stx.LTLImplication(operator, left, right);
                break;
            case LTLParser.EQUIVALENCE:
                binaryExpression = new stx.LTLEquivalence(operator, left, right);
                break;
            case LTLParser.SUNTIL:
                binaryExpression = new stx.LTLStrongUntil(operator, left, right);
                break;
            case LTLParser.WUNTIL:
                binaryExpression = new stx.LTLWeakUntil(operator, left, right);
                break;
            case LTLParser.SRELEASE:
                binaryExpression = new stx.LTLStrongRelease(operator, left, right);
                break;
            case LTLParser.WRELEASE:
                binaryExpression = new stx.LTLWeakRelease(operator, left, right);
                break;
        }
        this.setValue(ctx, binaryExpression);
    }

    exitAtomExp(ctx) {
        this.setValue(ctx, this.getValue(ctx.atom()));
    }

    exitParenExp(ctx) {
        this.setValue(ctx, this.getValue(ctx.formula()));
    }

    exitReferenceExp(ctx) {
        const reference = new stx.LTLReference(ctx.IDENTIFIER().getText());
        this.setValue(ctx, reference);
    }

    exitFormulaDeclaration(ctx) {
        const name = ctx.IDENTIFIER().getText();
        let expression = null;

        if (ctx.formula() != null) {
            expression = this.getValue(ctx.formula());
        }
        if (ctx.automaton() != null) {
            expression = this.getValue(ctx.automaton());
        }
        const formula = new stx.LTLExpressionDeclaration(name, expression, ctx.SEQ() != null ? false : true);
        this.setValue(ctx, formula);
    }

    exitFormulaDeclarationList(ctx) {
        const declarations = [];
        for (let i = 0; i < ctx.formulaDeclaration().length; i++) {
            declarations.push(this.getValue(ctx.formulaDeclaration(i)));
        }
        const declarationNode = new stx.LTLDeclarations(declarations);
        this.setValue(ctx, declarationNode);
    }

    exitLetDecl(ctx) {
        const declarations = this.getValue(ctx.formulaDeclarationList());
        this.setValue(ctx, declarations);
    }

    exitLetExp(ctx) {
        const declarations = this.getValue(ctx.letDecl());
        const expression = this.getValue(ctx.formula());
        const letExpression = new stx.LTLLetExpression(declarations, expression);
        this.setValue(ctx, letExpression);
    }

    exitBlock(ctx) {
        const declarations = [];
        for (let i = 0; i < ctx.formulaDeclaration().length; i++) {
            const formulaDeclaration = ctx.formulaDeclaration(i);
            const formula = this.getValue(formulaDeclaration);
            declarations.push(formula);
        }
        this.tree = new stx.LTLDeclarations(declarations);
        this.setValue(ctx, this.tree);
    }
}

export class Context {
    constructor(scope = new Map()) {
        this.context = new Array();
        //The first context is the global context
        this.context.push(scope);
    }
    currentContext() {
        return this.context[this.context.length - 1];
    }

    pushContext(context) { 
        if (context == null) {
            context = new Map();
        }
        this.context.push(context); 
    }
    popContext() { this.context.pop(); }

    symbolMissingError(symbol) {
        return new Error(`Symbol ${symbol} is not defined in the current scope`);
    }

    symbolAlreadyDefinedError(symbol) {
        return new Error(`Symbol ${symbol} is already defined in the current scope`);
    }

    lookup(symbol) {
        for (let i = this.context.length - 1; i >= 0; i--) {
            if (this.context[i].has(symbol)) {
                return this.context[i].get(symbol);
            }
        }
        throw new this.symbolMissingError(symbol);
    }

    define(symbol, value) {
        if (this.currentContext().has(symbol)) {
            throw this.symbolAlreadyDefinedError(symbol);
        }
        this.currentContext().set(symbol, value);
    }
}

export class LTLSymbolResolver extends stx.LTLVisitor {
    visitLetExpression(letExpression, environment) {
        environment.pushContext();
        letExpression.declarations.accept(this, environment);
        letExpression.expression.accept(this, environment);
        environment.popContext();
    }

    visitDeclarations(declarations, environment) {
        for (let i = 0; i < declarations.declarations.length; i++) {
            declarations.declarations[i].accept(this, environment);
        }
    }

    visitExpressionDeclaration(expressionDeclaration, environment) {
        expressionDeclaration.expression.accept(this, environment);
        environment.define(expressionDeclaration.name, expressionDeclaration.expression);
    }

    visitReference(reference, environment) {
        if (reference.expression == null)
            try {
                reference.setExpression(environment.lookup(reference.name));
            } catch (error) {
                throw environment.symbolMissingError(reference.name);
            }
    }

    visitUnaryExpression(unaryExpression, environment) {
        unaryExpression.expression.accept(this, environment);
    }

    visitBinaryExpression(binaryExpression, environment) {
        binaryExpression.left.accept(this, environment);
        binaryExpression.right.accept(this, environment);
    }
}