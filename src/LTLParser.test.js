import {antlr4Parser} from './LTLReader.js';

function parseExpression(input) {
    const parser = antlr4Parser(input);
    const tree = parser.formula();
    return tree.toStringTree(null, parser);
}

function parseDeclarations(input) {
    const parser = antlr4Parser(input);
    const tree = parser.block();
    return tree.toStringTree(null, parser);
}

test('literal', () => {
    expect(parseExpression('true')).toBe('(formula (literal true))');
    expect(parseExpression('false')).toBe('(formula (literal false))');
});

test('reference', () => {
    expect(parseExpression('x')).toBe('(formula x)');
    expect(parseExpression('zm')).toBe('(formula zm)');
    expect(parseExpression('x1')).toBe('(formula x1)');
    expect(parseExpression('N x')).toBe('(formula N (formula x))');
});

test('atom |', () => {
    expect(parseExpression('|x|')).toBe('(formula (atom |x|))');
    expect(parseExpression('|a-b|')).toBe('(formula (atom |a-b|))');
    expect(parseExpression('|a>2|')).toBe('(formula (atom |a>2|))');

    expect(parseExpression('|to\\|to|')).toBe('(formula (atom |to\\|to|))');
    expect(parseExpression('|to\\"to|')).toBe('(formula (atom |to\\"to|))');
});

test('atom "', () => {
    expect(parseExpression('"x"')).toBe('(formula (atom "x"))');
    expect(parseExpression('"a-b"')).toBe('(formula (atom "a-b"))');
    expect(parseExpression('"a>2"')).toBe('(formula (atom "a>2"))');

    expect(parseExpression('"to\\|to"')).toBe('(formula (atom "to\\|to"))');
    expect(parseExpression('"to\\"to"')).toBe('(formula (atom "to\\"to"))');
});

test('paren', () => {
    expect(parseExpression('(true)')).toBe('(formula ( (formula (literal true)) ))');
    expect(parseExpression('(zm)')).toBe('(formula ( (formula zm) ))');
    expect(parseExpression('(x)')).toBe('(formula ( (formula x) ))');
    expect(parseExpression('(N x)')).toBe('(formula ( (formula N (formula x)) ))');
});

test('unary negation !', () => {
    expect(parseExpression('!true')).toBe('(formula ! (formula (literal true)))');
    expect(parseExpression('!false')).toBe('(formula ! (formula (literal false)))');
    expect(parseExpression('!x')).toBe('(formula ! (formula x))');
    expect(parseExpression('!zm')).toBe('(formula ! (formula zm))');
    expect(parseExpression('!!true')).toBe('(formula ! (formula ! (formula (literal true))))');
});

test('unary negation ~', () => {
    expect(parseExpression('~true')).toBe('(formula ~ (formula (literal true)))');
    expect(parseExpression('~false')).toBe('(formula ~ (formula (literal false)))');
    expect(parseExpression('~x')).toBe('(formula ~ (formula x))');
    expect(parseExpression('~zm')).toBe('(formula ~ (formula zm))');
    expect(parseExpression('~~true')).toBe('(formula ~ (formula ~ (formula (literal true))))');
});

test('unary negation not', () => {
    expect(parseExpression('not true')).toBe('(formula not (formula (literal true)))');
    expect(parseExpression('not false')).toBe('(formula not (formula (literal false)))');
    expect(parseExpression('not x')).toBe('(formula not (formula x))');
    expect(parseExpression('not zm')).toBe('(formula not (formula zm))');
    expect(parseExpression('not not true')).toBe('(formula not (formula not (formula (literal true))))');
});

test('next', () => {
    expect(parseExpression('next true')).toBe('(formula next (formula (literal true)))');
    expect(parseExpression('N true')).toBe('(formula N (formula (literal true)))');
    expect(parseExpression('() true')).toBe('(formula () (formula (literal true)))');
    expect(parseExpression('◯ true')).toBe('(formula ◯ (formula (literal true)))');
    expect(parseExpression('o true')).toBe('(formula o (formula (literal true)))');
    expect(parseExpression('o(o x)')).toBe('(formula o (formula ( (formula o (formula x)) )))');
});

test('eventually', () => {
    expect(parseExpression('eventually true')).toBe('(formula eventually (formula (literal true)))');
    expect(parseExpression('F true')).toBe('(formula F (formula (literal true)))');
    expect(parseExpression('<> true')).toBe('(formula <> (formula (literal true)))');
    expect(parseExpression('◇ true')).toBe('(formula ◇ (formula (literal true)))');
});

test('always', () => {
    expect(parseExpression('globally true')).toBe('(formula globally (formula (literal true)))');
    expect(parseExpression('always true')).toBe('(formula always (formula (literal true)))');
    expect(parseExpression('G true')).toBe('(formula G (formula (literal true)))');
    expect(parseExpression('[] true')).toBe('(formula [] (formula (literal true)))');
    expect(parseExpression('☐ true')).toBe('(formula ☐ (formula (literal true)))');
});

test('strong until', () => {
    expect(parseExpression('true U false')).toBe('(formula (formula (literal true)) U (formula (literal false)))');
    expect(parseExpression('true SU false')).toBe('(formula (formula (literal true)) SU (formula (literal false)))');
    expect(parseExpression('true until false')).toBe('(formula (formula (literal true)) until (formula (literal false)))');
    expect(parseExpression('true strong-until false')).toBe('(formula (formula (literal true)) strong-until (formula (literal false)))');
});

test('weak until', () => {
    expect(parseExpression('true W false')).toBe('(formula (formula (literal true)) W (formula (literal false)))');
    expect(parseExpression('true WU false')).toBe('(formula (formula (literal true)) WU (formula (literal false)))');
    expect(parseExpression('true weak-until false')).toBe('(formula (formula (literal true)) weak-until (formula (literal false)))');
});

test('strong-release', () => {
    expect(parseExpression('true M false')).toBe('(formula (formula (literal true)) M (formula (literal false)))');
    expect(parseExpression('true SR false')).toBe('(formula (formula (literal true)) SR (formula (literal false)))');
    expect(parseExpression('true strong-release false')).toBe('(formula (formula (literal true)) strong-release (formula (literal false)))');
});

test('weak-release', () => {
    expect(parseExpression('true R false')).toBe('(formula (formula (literal true)) R (formula (literal false)))');
    expect(parseExpression('true WR false')).toBe('(formula (formula (literal true)) WR (formula (literal false)))');
    expect(parseExpression('true weak-release false')).toBe('(formula (formula (literal true)) weak-release (formula (literal false)))');
});

test('conjunction', () => {
    expect(parseExpression('true and false')).toBe('(formula (formula (literal true)) and (formula (literal false)))');
    expect(parseExpression('true & false')).toBe('(formula (formula (literal true)) & (formula (literal false)))');
    expect(parseExpression('true && false')).toBe('(formula (formula (literal true)) && (formula (literal false)))');
    expect(parseExpression('true /\\ false')).toBe('(formula (formula (literal true)) /\\ (formula (literal false)))');
    expect(parseExpression('true * false')).toBe('(formula (formula (literal true)) * (formula (literal false)))');
    expect(parseExpression('true ∧ false')).toBe('(formula (formula (literal true)) ∧ (formula (literal false)))');
});

test('disjunction', () => {
    expect(parseExpression('true or false')).toBe('(formula (formula (literal true)) or (formula (literal false)))');
    expect(parseExpression('true | false')).toBe('(formula (formula (literal true)) | (formula (literal false)))');
    expect(parseExpression('true || false')).toBe('(formula (formula (literal true)) || (formula (literal false)))');
    expect(parseExpression('true \\/ false')).toBe('(formula (formula (literal true)) \\/ (formula (literal false)))');
    expect(parseExpression('true + false')).toBe('(formula (formula (literal true)) + (formula (literal false)))');
    expect(parseExpression('true ∨ false')).toBe('(formula (formula (literal true)) ∨ (formula (literal false)))');
});

test('xor', () => {
    expect(parseExpression('true xor false')).toBe('(formula (formula (literal true)) xor (formula (literal false)))');
    expect(parseExpression('true ^ false')).toBe('(formula (formula (literal true)) ^ (formula (literal false)))');
    expect(parseExpression('true ⊻ false')).toBe('(formula (formula (literal true)) ⊻ (formula (literal false)))');
    expect(parseExpression('true ⊕ false')).toBe('(formula (formula (literal true)) ⊕ (formula (literal false)))');
});

test('implication', () => {
    expect(parseExpression('true implies false')).toBe('(formula (formula (literal true)) implies (formula (literal false)))');
    expect(parseExpression('true -> false')).toBe('(formula (formula (literal true)) -> (formula (literal false)))');
    expect(parseExpression('true => false')).toBe('(formula (formula (literal true)) => (formula (literal false)))');
    expect(parseExpression('true → false')).toBe('(formula (formula (literal true)) → (formula (literal false)))');
    expect(parseExpression('true ⟹ false')).toBe('(formula (formula (literal true)) ⟹ (formula (literal false)))');
});

test('equivalence', () => {
    expect(parseExpression('true iff false')).toBe('(formula (formula (literal true)) iff (formula (literal false)))');
    expect(parseExpression('true <-> false')).toBe('(formula (formula (literal true)) <-> (formula (literal false)))');
    expect(parseExpression('true <=> false')).toBe('(formula (formula (literal true)) <=> (formula (literal false)))');
    expect(parseExpression('true ↔ false')).toBe('(formula (formula (literal true)) ↔ (formula (literal false)))');
    expect(parseExpression('true ⟺ false')).toBe('(formula (formula (literal true)) ⟺ (formula (literal false)))');
});

test('let', () => {
    expect(parseExpression('let x = true in x')).toBe('(formula (letDecl let (formulaDeclarationList (formulaDeclaration x = (formula (literal true)))) in) (formula x))');
    expect(parseExpression('let x = true in x and x')).toBe('(formula (letDecl let (formulaDeclarationList (formulaDeclaration x = (formula (literal true)))) in) (formula (formula x) and (formula x)))');
});

test('multiple declarations', () => {
    expect(parseDeclarations('a = true b = false')).toBe('(block (formulaDeclaration a = (formula (literal true))) (formulaDeclaration b = (formula (literal false))))');
});

test('linked declarations', () => {
    expect(parseDeclarations('a = true b = a')).toBe('(block (formulaDeclaration a = (formula (literal true))) (formulaDeclaration b = (formula a)))');
});

test('linked declarations with let', () => {
    expect(parseDeclarations('a = true b = let x = a in x && true')).toBe('(block (formulaDeclaration a = (formula (literal true))) (formulaDeclaration b = (formula (letDecl let (formulaDeclarationList (formulaDeclaration x = (formula a))) in) (formula (formula x) && (formula (literal true))))))');
});
