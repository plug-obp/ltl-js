grammar LTL;

block : formulaDeclaration+;

formulaDeclaration : IDENTIFIER (SEQ|EQ) formula;
formulaDeclarationList : formulaDeclaration (COMMA formulaDeclaration)* COMMA?;

formula :
          literal                                                                   #LiteralExp
        | IDENTIFIER                                                                #ReferenceExp
        | atom                                                                      #AtomExp
        | LPAREN formula RPAREN                                                     #ParenExp
        | operator=NEGATION formula                                                 #UnaryExp
        | operator=NEXT formula                                                     #UnaryExp
        | operator=(EVENTUALLY|GLOBALLY) formula                                    #UnaryExp
        |<assoc=right> formula operator=(SUNTIL|WUNTIL|SRELEASE|WRELEASE) formula   #BinaryExp
        | formula operator=CONJUNCTION formula                                      #BinaryExp
        | formula operator=DISJUNCTION formula                                      #BinaryExp
        | formula operator=XOR formula                                              #BinaryExp
        |<assoc=right> formula operator=(IMPLICATION | EQUIVALENCE) formula         #BinaryExp
        | letDecl formula                                                           #LetExp
        ;

literal : TRUE | FALSE;
atom : ATOMINLINE;

letDecl : LET formulaDeclarationList IN;

CONJUNCTION: 'and' | '&' | '&&' | '/\\' | '*' | '∧';
DISJUNCTION: 'or' | '|' | '||' | '\\/' | '+' | '∨';
EQUIVALENCE: 'iff' | '<->' | '<=>' | '⟺' | '↔';
EVENTUALLY: 'eventually' | 'F' | '<>' | '\u25C7' /*♢*/;
FALSE: 'false' | '0';
GLOBALLY: 'globally' | 'always' | 'G' | '[]' | '\u2610' /* ☐ */;
IMPLICATION: 'implies' | '->' | '=>' | '→' | '⟹';
IN : 'in';
LET : 'let' | '\\';
NEGATION: '!' | '~' | 'not';
NEXT : 'next' | 'N' | '()' | '◯' | 'o';
SUNTIL: 'until' | 'U' | 'SU' | 'strong-until';
WUNTIL: 'W' | 'WU' | 'weak-until';
SRELEASE: 'M' | 'SR' | 'strong-release';
WRELEASE: 'R' | 'WR' | 'weak-release';
TRUE: 'true' | '1';
XOR: 'xor' | '^' | '⊻' | '⊕';

reserved: CONJUNCTION | DISJUNCTION | EQUIVALENCE | EVENTUALLY | FALSE | GLOBALLY | IMPLICATION | IN | LET | NEGATION | NEXT | SUNTIL | WUNTIL | SRELEASE | WRELEASE | TRUE | XOR;

ATOMINLINE : PIPEATOM | QUOTEATOM | BRAKETATOM;
PIPEATOM : '|' ('\\|' | ~'|')* '|';
QUOTEATOM: '"' ('\\"' | ~'"')* '"';
BRAKETATOM: '[' ('\\[' | ~']')* ']';

IDENTIFIER : [a-zA-Z][a-zA-Z_0-9]*; 

EQ : '=';
SEQ : '*=';
COMMA : ',';
SEMICOLON : ';';
LPAREN : '(';
RPAREN : ')';

LINE_COMMENT : '//' .*? '\n' -> skip ;
COMMENT : '/*' .*? '*/' -> skip ;
WS : [ \r\t\n]+ -> skip ;
