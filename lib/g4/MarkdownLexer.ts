// @ts-nocheck
// Generated from ./lib/g4/Markdown.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class MarkdownLexer extends Lexer {
	public static readonly HEADER = 1;
	public static readonly CHAR = 2;
	public static readonly INLINE_CODE = 3;
	public static readonly BLOCK_CODE = 4;
	public static readonly NL = 5;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [  ];
	public static readonly symbolicNames: string[] = [ null, "HEADER", "CHAR", 
                                                    "INLINE_CODE", "BLOCK_CODE", 
                                                    "NL" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"HEADER", "CHAR", "INLINE_CODE", "BLOCK_CODE", "NL", "CODE_LANG", "BLOCK_CODE_FLAG", 
		"BACKTICK", "WS", "HASH",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, MarkdownLexer._ATN, MarkdownLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Markdown.g4"; }

	public get literalNames(): (string | null)[] { return MarkdownLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return MarkdownLexer.symbolicNames; }
	public get ruleNames(): string[] { return MarkdownLexer.ruleNames; }

	public get serializedATN(): number[] { return MarkdownLexer._serializedATN; }

	public get channelNames(): string[] { return MarkdownLexer.channelNames; }

	public get modeNames(): string[] { return MarkdownLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,5,74,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,1,0,4,0,23,8,0,11,0,12,0,24,1,0,1,0,1,1,1,1,1,2,1,2,4,2,33,8,2,11,2,12,
	2,34,1,2,1,2,1,3,1,3,3,3,41,8,3,1,3,1,3,5,3,45,8,3,10,3,12,3,48,9,3,1,3,
	3,3,51,8,3,1,3,1,3,1,4,3,4,56,8,4,1,4,1,4,1,5,4,5,61,8,5,11,5,12,5,62,1,
	6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,46,0,10,1,1,3,2,5,3,7,4,9,5,11,
	0,13,0,15,0,17,0,19,0,1,0,4,2,0,10,10,13,13,3,0,10,10,13,13,96,96,3,0,9,
	10,13,13,96,96,2,0,9,9,32,32,75,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,
	1,0,0,0,0,9,1,0,0,0,1,22,1,0,0,0,3,28,1,0,0,0,5,30,1,0,0,0,7,38,1,0,0,0,
	9,55,1,0,0,0,11,60,1,0,0,0,13,64,1,0,0,0,15,68,1,0,0,0,17,70,1,0,0,0,19,
	72,1,0,0,0,21,23,3,19,9,0,22,21,1,0,0,0,23,24,1,0,0,0,24,22,1,0,0,0,24,
	25,1,0,0,0,25,26,1,0,0,0,26,27,3,17,8,0,27,2,1,0,0,0,28,29,8,0,0,0,29,4,
	1,0,0,0,30,32,3,15,7,0,31,33,8,1,0,0,32,31,1,0,0,0,33,34,1,0,0,0,34,32,
	1,0,0,0,34,35,1,0,0,0,35,36,1,0,0,0,36,37,3,15,7,0,37,6,1,0,0,0,38,40,3,
	13,6,0,39,41,3,11,5,0,40,39,1,0,0,0,40,41,1,0,0,0,41,42,1,0,0,0,42,46,3,
	9,4,0,43,45,9,0,0,0,44,43,1,0,0,0,45,48,1,0,0,0,46,47,1,0,0,0,46,44,1,0,
	0,0,47,50,1,0,0,0,48,46,1,0,0,0,49,51,3,9,4,0,50,49,1,0,0,0,50,51,1,0,0,
	0,51,52,1,0,0,0,52,53,3,13,6,0,53,8,1,0,0,0,54,56,5,13,0,0,55,54,1,0,0,
	0,55,56,1,0,0,0,56,57,1,0,0,0,57,58,5,10,0,0,58,10,1,0,0,0,59,61,8,2,0,
	0,60,59,1,0,0,0,61,62,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,12,1,0,0,0,
	64,65,5,96,0,0,65,66,5,96,0,0,66,67,5,96,0,0,67,14,1,0,0,0,68,69,5,96,0,
	0,69,16,1,0,0,0,70,71,7,3,0,0,71,18,1,0,0,0,72,73,5,35,0,0,73,20,1,0,0,
	0,8,0,24,34,40,46,50,55,62,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MarkdownLexer.__ATN) {
			MarkdownLexer.__ATN = new ATNDeserializer().deserialize(MarkdownLexer._serializedATN);
		}

		return MarkdownLexer.__ATN;
	}


	static DecisionsToDFA = MarkdownLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}