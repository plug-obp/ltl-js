
class LTLSyntaxTreeElement {
    accept(visitor, input) {
        return visitor.visitSyntaxTreeElement(this, input);
    }
}
export class LTLDeclarations extends LTLSyntaxTreeElement {
    declarations;
    constructor(declarations) {
        super();
        this.declarations = declarations;
    }
    accept(visitor, input) {
        return visitor.visitDeclarations(this, input);
    }
}

class LTLExpression extends LTLSyntaxTreeElement {
    accept(visitor, input) {
        return visitor.visitExpression(this, input);
    }
}

export class LTLTrue extends LTLExpression {
    accept(visitor, input) {
        return visitor.visitTrue(this, input);
    }
}
export class LTLFalse extends LTLExpression {
    accept(visitor, input) {
        return visitor.visitFalse(this, input);
    }
}

export class LTLAtom extends LTLExpression {
    value;
    delimiter;
    constructor(value, delimiter) {
        super();
        this.value = value;
        this.delimiter = delimiter;
    }
    accept(visitor, input) {
        return visitor.visitAtom(this, input);
    }
}
export class LTLReference extends LTLExpression {
    name;
    expression = null;
    constructor(name) {
        super();
        this.name = name;
    }
    setExpression(expression) {
        this.expression = expression;
    }
    accept(visitor, input) {
        return visitor.visitReference(this, input);
    }
}
class LTLUnaryExpression extends LTLExpression {
    operator;
    expression;
    constructor(operator, expression) {
        super();
        this.operator = operator;
        this.expression = expression;
    }
    accept(visitor, input) {
        return visitor.visitUnaryExpression(this, input);
    }
}
export class LTLNegation extends LTLUnaryExpression {
    accept(visitor, input) {
        return visitor.visitNegation(this, input);
    }
}
export class LTLNext extends LTLUnaryExpression {
    accept(visitor, input) {
        return visitor.visitNext(this, input);
    }
}
export class LTLEventually extends LTLUnaryExpression {
    accept(visitor, input) {
        return visitor.visitEventually(this, input);
    }
}
export class LTLGlobally extends LTLUnaryExpression {
    accept(visitor, input) {
        return visitor.visitGlobally(this, input);
    }
}

class LTLBinaryExpression extends LTLExpression {
    operator;
    left; 
    right;
    constructor(operator, left, right) {
        super();
        this.operator = operator;
        this.left = left;
        this.right = right;
    }
    accept(visitor, input) {
        return visitor.visitBinaryExpression(this, input);
    }
}
export class LTLConjunction extends LTLBinaryExpression {
    accept(visitor, input) {
        return visitor.visitConjunction(this, input);
    }
}
export class LTLDisjunction extends LTLBinaryExpression {
    accept(visitor, input) {
        return visitor.visitDisjunction(this, input);
    }
}
export class LTLExclusiveDisjunction extends LTLBinaryExpression {
    accept(visitor, input) {
        return visitor.visitExclusiveDisjunction(this, input);
    }
}
export class LTLImplication extends LTLBinaryExpression {
    accept(visitor, input) {
        return visitor.visitImplication(this, input);
    }
}
export class LTLEquivalence extends LTLBinaryExpression {
    accept(visitor, input) {
        return visitor.visitEquivalence(this, input);
    }
}
export class LTLStrongUntil extends LTLBinaryExpression {
    accept(visitor, input) {
        return visitor.visitStrongUntil(this, input);
    }
}
export class LTLWeakUntil extends LTLBinaryExpression {
    accept(visitor, input) {
        return visitor.visitWeakUntil(this, input);
    }
}
export class LTLStrongRelease extends LTLBinaryExpression {
    accept(visitor, input) {
        return visitor.visitStrongRelease(this, input);
    }
}
export class LTLWeakRelease extends LTLBinaryExpression {
    accept(visitor, input) {
        return visitor.visitWeakRelease(this, input);
    }
}

export class LTLExpressionDeclaration extends LTLSyntaxTreeElement {
    name;
    expression;
    isInternal;
    constructor(name, expression, isInternal = true) {
        super();
        this.name = name;
        this.expression = expression;
        this.isInternal = isInternal;
    }
    accept(visitor, input) {
        return visitor.visitExpressionDeclaration(this, input);
    }
}

export class LTLLetExpression extends LTLExpression {
    declarations;
    expression;
    constructor(declarations, expression) {
        super();
        this.declarations = declarations == null ? new LTLDeclarations([]) : declarations;
        this.expression = expression;
    }
    accept(visitor, input) {
        return visitor.visitLetExpression(this, input);
    }
}

export class LTLVisitor {
    //add methods for each class in the syntax tree
    visitSyntaxTreeElement(element, input) {}
    visitDeclarations(element, input) {
        this.visitSyntaxTreeElement(element, input);
    }
    visitExpression(element, input) {
        this.visitSyntaxTreeElement(element, input);
    }
    visitTrue(element, input) {
        this.visitExpression(element, input);
    }
    visitFalse(element, input) {
        this.visitExpression(element, input);
    }
    visitAtom(element, input) {
        this.visitExpression(element, input);
    }
    visitReference(element, input) {
        this.visitExpression(element, input);
    }
    visitUnaryExpression(element, input) {
        this.visitExpression(element, input);
    }
    visitNegation(element, input) {
        this.visitUnaryExpression(element, input);
    }
    visitNext(element, input) {
        this.visitUnaryExpression(element, input);
    }
    visitEventually(element, input) {
        this.visitUnaryExpression(element, input);
    }
    visitGlobally(element, input) {
        this.visitUnaryExpression(element, input);
    }
    visitBinaryExpression(element, input) {
        this.visitExpression(element, input);
    }
    visitConjunction(element, input) {
        this.visitBinaryExpression(element, input);
    }
    visitDisjunction(element, input) {
        this.visitBinaryExpression(element, input);
    }
    visitExclusiveDisjunction(element, input) {
        this.visitBinaryExpression(element, input);
    }
    visitImplication(element, input) {
        this.visitBinaryExpression(element, input);
    }
    visitEquivalence(element, input) {
        this.visitBinaryExpression(element, input);
    }
    visitStrongUntil(element, input) {
        this.visitBinaryExpression(element, input);
    }
    visitWeakUntil(element, input) {
        this.visitBinaryExpression(element, input);
    }
    visitStrongRelease(element, input) {
        this.visitBinaryExpression(element, input);
    }
    visitWeakRelease(element, input) {
        this.visitBinaryExpression(element, input);
    }
    visitExpressionDeclaration(element, input) {
        this.visitSyntaxTreeElement(element, input);
    }
    visitLetExpression(element, input) {
        this.visitExpression(element, input);
    }
}
