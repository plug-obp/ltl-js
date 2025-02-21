import antlr4 from 'antlr4';
import LTLLexer from '../generated/grammar/LTLLexer.js';
import LTLParser from '../generated/grammar/LTLParser.js';
import {Context, LTLSymbolResolver, LTLSyntaxBuilder} from './LTLSyntaxBuilder.js';

export function antlr4Parser(input) {
	const chars = new antlr4.InputStream(input, true);
	const lexer = new LTLLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);
	return new LTLParser(tokens);
}

function buildSyntaxModel(antlr4Tree) {
	const syntaxBuilder = new LTLSyntaxBuilder();
	antlr4.tree.ParseTreeWalker.DEFAULT.walk(syntaxBuilder, antlr4Tree);
	return syntaxBuilder.map.get(antlr4Tree);
}

export function readExpression(input) {
	const parser = antlr4Parser(input);
	const tree = parser.formula();
	return buildSyntaxModel(tree);
}

export function readDeclarations(input) {
	const parser = antlr4Parser(input);
	const tree = parser.block();
	return buildSyntaxModel(tree);
}

export function link(tree, context = new Map()) {
	tree.accept(new LTLSymbolResolver(), new Context(context));
	tree;
}

export function readAndLinkDeclarations(input) {
	const declarations = readDeclarations(input);
	link(declarations);
	return declarations;
}