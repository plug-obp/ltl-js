import { LTLVisitor } from "./LTLSyntaxModel.js";

export function transformToLTL3BA(ltlSyntax) {
    const converter = new LTLConverterForLTL3BA();
    return {
        expression: ltlSyntax.accept(converter, null),
        name2atom: converter.name2atom,
    };
}

export class LTLConverterForLTL3BA extends LTLVisitor {
    name2atom;
    atom2name;
    constructor() {
        super();
        this.name2atom = new Map();
        this.atom2name = new Map();
    }
    visitSyntaxTreeElement(element, input) {
        throw new Error(`The LTL to ltl3ba converter does not support ${element.constructor.name} elements.`);
    }
    visitAtom(element, input) {
        let name = this.atom2name.get(element);
        if (name === undefined) {
            name = `atom${this.name2atom.size}`;
            this.name2atom.set(name, element);
            this.atom2name.set(element, name);
        }
        return name;
    }
    visitTrue(element, input) {
        return "true";
    }
    visitFalse(element, input) {
        return "false";
    }
    visitReference(element, input) {
        return element.expression.accept(this, input);
    }
    visitNegation(element, input) {
        return `(!${element.expression.accept(this, input)})`;
    }
    visitNext(element, input) {
        return `(X ${element.expression.accept(this, input)})`;
    }
    visitEventually(element, input) {
        return `(<> ${element.expression.accept(this, input)})`;
    }
    visitGlobally(element, input) {
        return `([] ${element.expression.accept(this, input)})`;
    }
    visitConjunction(element, input) {
        return `(${element.left.accept(this, input)} && ${element.right.accept(this, input)})`;
    }
    visitDisjunction(element, input) {
        return `(${element.left.accept(this, input)} || ${element.right.accept(this, input)})`;
    }
    visitExclusiveDisjunction(element, input) {
        //xor is not supported by LTL3BA, use the xor enconding instead : (!a && b) || (a && !b)
        // return `(${element.left.accept(this, input)} xor ${element.right.accept(this, input)})`;
        return `((!${element.left.accept(this, input)} && ${element.right.accept(this, input)}) || (${element.left.accept(this, input)} && !${element.right.accept(this, input)}))`;
    }
    visitImplication(element, input) {
        return `(${element.left.accept(this, input)} -> ${element.right.accept(this, input)})`;
    }
    visitEquivalence(element, input) {
        return `(${element.left.accept(this, input)} <-> ${element.right.accept(this, input)})`;
    }
    visitStrongUntil(element, input) {
        return `(${element.left.accept(this, input)} U ${element.right.accept(this, input)})`;
    }
    visitWeakUntil(element, input) {
        // W is not support by LTL3BA
        //return `(${element.left.accept(this, input)} W ${element.right.accept(this, input)})`;
        return `([] ${element.left.accept(this, input)}) || (${element.left.accept(this, input)} U ${element.right.accept(this, input)})`;
    }
    visitStrongRelease(element, input) {
        // M is not support by LTL3BA
        //return `(${element.left.accept(this, input)} M ${element.right.accept(this, input)})`;
        return `(${element.right.accept(this, input)}) U (${element.left.accept(this, input)} && ${element.right.accept(this, input)})`;
    }
    visitWeakRelease(element, input) {
        return `(${element.left.accept(this, input)} R ${element.right.accept(this, input)})`;
    }
    visitLetExpression(element, input) {
        return element.expression.accept(this, input);
    }
    visitExpressionDeclaration(element, input) {
        return element.expression.accept(this, input);
    }
}