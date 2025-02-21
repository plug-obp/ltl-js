import { LTLVisitor } from "./LTLSyntaxModel.js";

//This class evaluates boolean LTL expressions relying on an atomEvaluator for the atoms.
export class LTLEvaluator extends LTLVisitor {
    atomEvaluator;
    constructor(atomEvaluator) {
        super();
        this.atomEvaluator = atomEvaluator;
    }
    async visitAtom(element, input) {
        return await this.atomEvaluator(element.value, input);
    }
    async visitTrue(element, input) {
        return true;
    }
    async visitFalse(element, input) {
        return false;
    }
    async visitReference(element, input) {
        return element.expression.accept(this, input);
    }
    async visitExpression(element, input) {
        throw new Error(`The LTL evaluator does not support ${element.constructor.name} expressions.`);
    }
    async visitNegation(element, input) {
        return ! await element.expression.accept(this, input);
    }
    async visitConjunction(element, input) {
        return await element.left.accept(this, input) && await element.right.accept(this, input);
    }
    async visitDisjunction(element, input) {
        return await element.left.accept(this, input) || await element.right.accept(this, input);
    }
    async visitExclusiveDisjunction(element, input) {
        return await element.left.accept(this, input) !== await element.right.accept(this, input);
    }
    async visitImplication(element, input) {
        return ! await element.left.accept(this, input) || await element.right.accept(this, input);
    }
    async visitEquivalence(element, input) {
        return await element.left.accept(this, input) === await element.right.accept(this, input);
    }
    async visitLetExpression(element, input) {
        return element.expression.accept(this, input);
    }
    async visitExpressionDeclaration(element, input) {
        return element.expression.accept(this, input);
    }
}