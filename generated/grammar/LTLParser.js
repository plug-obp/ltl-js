// Generated from grammar/LTL.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LTLListener from './LTLListener.js';
const serializedATN = [4,1,31,86,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,1,1,1,1,1,1,1,1,2,
1,2,1,2,5,2,29,8,2,10,2,12,2,32,9,2,1,2,3,2,35,8,2,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,54,8,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,71,8,3,10,3,12,3,74,9,3,
1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,0,1,6,8,0,2,4,6,8,10,12,14,0,
6,1,0,23,24,2,0,4,4,6,6,1,0,12,15,2,0,3,3,7,7,2,0,5,5,16,16,1,0,1,17,92,
0,17,1,0,0,0,2,21,1,0,0,0,4,25,1,0,0,0,6,53,1,0,0,0,8,75,1,0,0,0,10,77,1,
0,0,0,12,79,1,0,0,0,14,83,1,0,0,0,16,18,3,2,1,0,17,16,1,0,0,0,18,19,1,0,
0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,1,1,0,0,0,21,22,5,22,0,0,22,23,7,0,0,
0,23,24,3,6,3,0,24,3,1,0,0,0,25,30,3,2,1,0,26,27,5,25,0,0,27,29,3,2,1,0,
28,26,1,0,0,0,29,32,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,34,1,0,0,0,32,
30,1,0,0,0,33,35,5,25,0,0,34,33,1,0,0,0,34,35,1,0,0,0,35,5,1,0,0,0,36,37,
6,3,-1,0,37,54,3,8,4,0,38,54,5,22,0,0,39,54,3,10,5,0,40,41,5,27,0,0,41,42,
3,6,3,0,42,43,5,28,0,0,43,54,1,0,0,0,44,45,5,10,0,0,45,54,3,6,3,9,46,47,
5,11,0,0,47,54,3,6,3,8,48,49,7,1,0,0,49,54,3,6,3,7,50,51,3,12,6,0,51,52,
3,6,3,1,52,54,1,0,0,0,53,36,1,0,0,0,53,38,1,0,0,0,53,39,1,0,0,0,53,40,1,
0,0,0,53,44,1,0,0,0,53,46,1,0,0,0,53,48,1,0,0,0,53,50,1,0,0,0,54,72,1,0,
0,0,55,56,10,6,0,0,56,57,7,2,0,0,57,71,3,6,3,6,58,59,10,5,0,0,59,60,5,1,
0,0,60,71,3,6,3,6,61,62,10,4,0,0,62,63,5,2,0,0,63,71,3,6,3,5,64,65,10,3,
0,0,65,66,5,17,0,0,66,71,3,6,3,4,67,68,10,2,0,0,68,69,7,3,0,0,69,71,3,6,
3,2,70,55,1,0,0,0,70,58,1,0,0,0,70,61,1,0,0,0,70,64,1,0,0,0,70,67,1,0,0,
0,71,74,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,7,1,0,0,0,74,72,1,0,0,0,75,
76,7,4,0,0,76,9,1,0,0,0,77,78,5,18,0,0,78,11,1,0,0,0,79,80,5,9,0,0,80,81,
3,4,2,0,81,82,5,8,0,0,82,13,1,0,0,0,83,84,7,5,0,0,84,15,1,0,0,0,6,19,30,
34,53,70,72];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LTLParser extends antlr4.Parser {

    static grammarFileName = "LTL.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            "'in'", null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            "'='", "'*='", "','", "';'", "'('", "')'" ];
    static symbolicNames = [ null, "CONJUNCTION", "DISJUNCTION", "EQUIVALENCE", 
                             "EVENTUALLY", "FALSE", "GLOBALLY", "IMPLICATION", 
                             "IN", "LET", "NEGATION", "NEXT", "SUNTIL", 
                             "WUNTIL", "SRELEASE", "WRELEASE", "TRUE", "XOR", 
                             "ATOMINLINE", "PIPEATOM", "QUOTEATOM", "BRAKETATOM", 
                             "IDENTIFIER", "EQ", "SEQ", "COMMA", "SEMICOLON", 
                             "LPAREN", "RPAREN", "LINE_COMMENT", "COMMENT", 
                             "WS" ];
    static ruleNames = [ "block", "formulaDeclaration", "formulaDeclarationList", 
                         "formula", "literal", "atom", "letDecl", "reserved" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LTLParser.ruleNames;
        this.literalNames = LTLParser.literalNames;
        this.symbolicNames = LTLParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 3:
    	    		return this.formula_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    formula_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		case 2:
    			return this.precpred(this._ctx, 4);
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LTLParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.formulaDeclaration();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===22);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formulaDeclaration() {
	    let localctx = new FormulaDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LTLParser.RULE_formulaDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(LTLParser.IDENTIFIER);
	        this.state = 22;
	        _la = this._input.LA(1);
	        if(!(_la===23 || _la===24)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 23;
	        this.formula(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formulaDeclarationList() {
	    let localctx = new FormulaDeclarationListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LTLParser.RULE_formulaDeclarationList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.formulaDeclaration();
	        this.state = 30;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 26;
	                this.match(LTLParser.COMMA);
	                this.state = 27;
	                this.formulaDeclaration(); 
	            }
	            this.state = 32;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 33;
	            this.match(LTLParser.COMMA);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	formula(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new FormulaContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 6;
	    this.enterRecursionRule(localctx, 6, LTLParser.RULE_formula, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 16:
	            localctx = new LiteralExpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 37;
	            this.literal();
	            break;
	        case 22:
	            localctx = new ReferenceExpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 38;
	            this.match(LTLParser.IDENTIFIER);
	            break;
	        case 18:
	            localctx = new AtomExpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 39;
	            this.atom();
	            break;
	        case 27:
	            localctx = new ParenExpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 40;
	            this.match(LTLParser.LPAREN);
	            this.state = 41;
	            this.formula(0);
	            this.state = 42;
	            this.match(LTLParser.RPAREN);
	            break;
	        case 10:
	            localctx = new UnaryExpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 44;
	            localctx.operator = this.match(LTLParser.NEGATION);
	            this.state = 45;
	            this.formula(9);
	            break;
	        case 11:
	            localctx = new UnaryExpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 46;
	            localctx.operator = this.match(LTLParser.NEXT);
	            this.state = 47;
	            this.formula(8);
	            break;
	        case 4:
	        case 6:
	            localctx = new UnaryExpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 48;
	            localctx.operator = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===4 || _la===6)) {
	                localctx.operator = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 49;
	            this.formula(7);
	            break;
	        case 9:
	            localctx = new LetExpContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 50;
	            this.letDecl();
	            this.state = 51;
	            this.formula(1);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 72;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 70;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new BinaryExpContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LTLParser.RULE_formula);
	                    this.state = 55;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 56;
	                    localctx.operator = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0))) {
	                        localctx.operator = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 57;
	                    this.formula(6);
	                    break;

	                case 2:
	                    localctx = new BinaryExpContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LTLParser.RULE_formula);
	                    this.state = 58;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 59;
	                    localctx.operator = this.match(LTLParser.CONJUNCTION);
	                    this.state = 60;
	                    this.formula(6);
	                    break;

	                case 3:
	                    localctx = new BinaryExpContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LTLParser.RULE_formula);
	                    this.state = 61;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 62;
	                    localctx.operator = this.match(LTLParser.DISJUNCTION);
	                    this.state = 63;
	                    this.formula(5);
	                    break;

	                case 4:
	                    localctx = new BinaryExpContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LTLParser.RULE_formula);
	                    this.state = 64;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 65;
	                    localctx.operator = this.match(LTLParser.XOR);
	                    this.state = 66;
	                    this.formula(4);
	                    break;

	                case 5:
	                    localctx = new BinaryExpContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, LTLParser.RULE_formula);
	                    this.state = 67;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 68;
	                    localctx.operator = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===3 || _la===7)) {
	                        localctx.operator = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 69;
	                    this.formula(2);
	                    break;

	                } 
	            }
	            this.state = 74;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LTLParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===16)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LTLParser.RULE_atom);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(LTLParser.ATOMINLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	letDecl() {
	    let localctx = new LetDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LTLParser.RULE_letDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(LTLParser.LET);
	        this.state = 80;
	        this.formulaDeclarationList();
	        this.state = 81;
	        this.match(LTLParser.IN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	reserved() {
	    let localctx = new ReservedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LTLParser.RULE_reserved);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 262142) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LTLParser.EOF = antlr4.Token.EOF;
LTLParser.CONJUNCTION = 1;
LTLParser.DISJUNCTION = 2;
LTLParser.EQUIVALENCE = 3;
LTLParser.EVENTUALLY = 4;
LTLParser.FALSE = 5;
LTLParser.GLOBALLY = 6;
LTLParser.IMPLICATION = 7;
LTLParser.IN = 8;
LTLParser.LET = 9;
LTLParser.NEGATION = 10;
LTLParser.NEXT = 11;
LTLParser.SUNTIL = 12;
LTLParser.WUNTIL = 13;
LTLParser.SRELEASE = 14;
LTLParser.WRELEASE = 15;
LTLParser.TRUE = 16;
LTLParser.XOR = 17;
LTLParser.ATOMINLINE = 18;
LTLParser.PIPEATOM = 19;
LTLParser.QUOTEATOM = 20;
LTLParser.BRAKETATOM = 21;
LTLParser.IDENTIFIER = 22;
LTLParser.EQ = 23;
LTLParser.SEQ = 24;
LTLParser.COMMA = 25;
LTLParser.SEMICOLON = 26;
LTLParser.LPAREN = 27;
LTLParser.RPAREN = 28;
LTLParser.LINE_COMMENT = 29;
LTLParser.COMMENT = 30;
LTLParser.WS = 31;

LTLParser.RULE_block = 0;
LTLParser.RULE_formulaDeclaration = 1;
LTLParser.RULE_formulaDeclarationList = 2;
LTLParser.RULE_formula = 3;
LTLParser.RULE_literal = 4;
LTLParser.RULE_atom = 5;
LTLParser.RULE_letDecl = 6;
LTLParser.RULE_reserved = 7;

class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LTLParser.RULE_block;
    }

	formulaDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(FormulaDeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.exitBlock(this);
		}
	}


}



class FormulaDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LTLParser.RULE_formulaDeclaration;
    }

	IDENTIFIER() {
	    return this.getToken(LTLParser.IDENTIFIER, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	SEQ() {
	    return this.getToken(LTLParser.SEQ, 0);
	};

	EQ() {
	    return this.getToken(LTLParser.EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.enterFormulaDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.exitFormulaDeclaration(this);
		}
	}


}



class FormulaDeclarationListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LTLParser.RULE_formulaDeclarationList;
    }

	formulaDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(FormulaDeclarationContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LTLParser.COMMA);
	    } else {
	        return this.getToken(LTLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.enterFormulaDeclarationList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.exitFormulaDeclarationList(this);
		}
	}


}



class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LTLParser.RULE_formula;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class LiteralExpContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.enterLiteralExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.exitLiteralExp(this);
		}
	}


}

LTLParser.LiteralExpContext = LiteralExpContext;

class ReferenceExpContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(LTLParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.enterReferenceExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.exitReferenceExp(this);
		}
	}


}

LTLParser.ReferenceExpContext = ReferenceExpContext;

class ParenExpContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(LTLParser.LPAREN, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	RPAREN() {
	    return this.getToken(LTLParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.enterParenExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.exitParenExp(this);
		}
	}


}

LTLParser.ParenExpContext = ParenExpContext;

class LetExpContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	letDecl() {
	    return this.getTypedRuleContext(LetDeclContext,0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.enterLetExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.exitLetExp(this);
		}
	}


}

LTLParser.LetExpContext = LetExpContext;

class AtomExpContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.enterAtomExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.exitAtomExp(this);
		}
	}


}

LTLParser.AtomExpContext = AtomExpContext;

class UnaryExpContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.operator = null;;
        super.copyFrom(ctx);
    }

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	NEGATION() {
	    return this.getToken(LTLParser.NEGATION, 0);
	};

	NEXT() {
	    return this.getToken(LTLParser.NEXT, 0);
	};

	EVENTUALLY() {
	    return this.getToken(LTLParser.EVENTUALLY, 0);
	};

	GLOBALLY() {
	    return this.getToken(LTLParser.GLOBALLY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.enterUnaryExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.exitUnaryExp(this);
		}
	}


}

LTLParser.UnaryExpContext = UnaryExpContext;

class BinaryExpContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.operator = null;;
        super.copyFrom(ctx);
    }

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	SUNTIL() {
	    return this.getToken(LTLParser.SUNTIL, 0);
	};

	WUNTIL() {
	    return this.getToken(LTLParser.WUNTIL, 0);
	};

	SRELEASE() {
	    return this.getToken(LTLParser.SRELEASE, 0);
	};

	WRELEASE() {
	    return this.getToken(LTLParser.WRELEASE, 0);
	};

	CONJUNCTION() {
	    return this.getToken(LTLParser.CONJUNCTION, 0);
	};

	DISJUNCTION() {
	    return this.getToken(LTLParser.DISJUNCTION, 0);
	};

	XOR() {
	    return this.getToken(LTLParser.XOR, 0);
	};

	IMPLICATION() {
	    return this.getToken(LTLParser.IMPLICATION, 0);
	};

	EQUIVALENCE() {
	    return this.getToken(LTLParser.EQUIVALENCE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.enterBinaryExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.exitBinaryExp(this);
		}
	}


}

LTLParser.BinaryExpContext = BinaryExpContext;

class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LTLParser.RULE_literal;
    }

	TRUE() {
	    return this.getToken(LTLParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(LTLParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LTLParser.RULE_atom;
    }

	ATOMINLINE() {
	    return this.getToken(LTLParser.ATOMINLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.exitAtom(this);
		}
	}


}



class LetDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LTLParser.RULE_letDecl;
    }

	LET() {
	    return this.getToken(LTLParser.LET, 0);
	};

	formulaDeclarationList() {
	    return this.getTypedRuleContext(FormulaDeclarationListContext,0);
	};

	IN() {
	    return this.getToken(LTLParser.IN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.enterLetDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.exitLetDecl(this);
		}
	}


}



class ReservedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LTLParser.RULE_reserved;
    }

	CONJUNCTION() {
	    return this.getToken(LTLParser.CONJUNCTION, 0);
	};

	DISJUNCTION() {
	    return this.getToken(LTLParser.DISJUNCTION, 0);
	};

	EQUIVALENCE() {
	    return this.getToken(LTLParser.EQUIVALENCE, 0);
	};

	EVENTUALLY() {
	    return this.getToken(LTLParser.EVENTUALLY, 0);
	};

	FALSE() {
	    return this.getToken(LTLParser.FALSE, 0);
	};

	GLOBALLY() {
	    return this.getToken(LTLParser.GLOBALLY, 0);
	};

	IMPLICATION() {
	    return this.getToken(LTLParser.IMPLICATION, 0);
	};

	IN() {
	    return this.getToken(LTLParser.IN, 0);
	};

	LET() {
	    return this.getToken(LTLParser.LET, 0);
	};

	NEGATION() {
	    return this.getToken(LTLParser.NEGATION, 0);
	};

	NEXT() {
	    return this.getToken(LTLParser.NEXT, 0);
	};

	SUNTIL() {
	    return this.getToken(LTLParser.SUNTIL, 0);
	};

	WUNTIL() {
	    return this.getToken(LTLParser.WUNTIL, 0);
	};

	SRELEASE() {
	    return this.getToken(LTLParser.SRELEASE, 0);
	};

	WRELEASE() {
	    return this.getToken(LTLParser.WRELEASE, 0);
	};

	TRUE() {
	    return this.getToken(LTLParser.TRUE, 0);
	};

	XOR() {
	    return this.getToken(LTLParser.XOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.enterReserved(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LTLListener ) {
	        listener.exitReserved(this);
		}
	}


}




LTLParser.BlockContext = BlockContext; 
LTLParser.FormulaDeclarationContext = FormulaDeclarationContext; 
LTLParser.FormulaDeclarationListContext = FormulaDeclarationListContext; 
LTLParser.FormulaContext = FormulaContext; 
LTLParser.LiteralContext = LiteralContext; 
LTLParser.AtomContext = AtomContext; 
LTLParser.LetDeclContext = LetDeclContext; 
LTLParser.ReservedContext = ReservedContext; 
