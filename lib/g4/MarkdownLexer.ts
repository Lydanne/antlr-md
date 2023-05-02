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
		"HEADER", "CHAR", "INLINE_CODE", "BLOCK_CODE", "NL", "BACKTICK", "WS", 
		"HASH",
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

	public static readonly _serializedATN: number[] = [4,0,5,58,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,19,8,
	0,11,0,12,0,20,1,0,1,0,1,1,1,1,1,2,1,2,4,2,29,8,2,11,2,12,2,30,1,2,1,2,
	1,3,1,3,1,3,1,3,1,3,4,3,40,8,3,11,3,12,3,41,1,3,1,3,1,3,1,3,1,4,3,4,49,
	8,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,0,0,8,1,1,3,2,5,3,7,4,9,5,11,0,13,0,
	15,0,1,0,4,2,0,10,10,13,13,3,0,10,10,13,13,96,96,1,0,96,96,2,0,9,9,32,32,
	58,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,1,18,1,0,
	0,0,3,24,1,0,0,0,5,26,1,0,0,0,7,34,1,0,0,0,9,48,1,0,0,0,11,52,1,0,0,0,13,
	54,1,0,0,0,15,56,1,0,0,0,17,19,3,15,7,0,18,17,1,0,0,0,19,20,1,0,0,0,20,
	18,1,0,0,0,20,21,1,0,0,0,21,22,1,0,0,0,22,23,3,13,6,0,23,2,1,0,0,0,24,25,
	8,0,0,0,25,4,1,0,0,0,26,28,3,11,5,0,27,29,8,1,0,0,28,27,1,0,0,0,29,30,1,
	0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,32,1,0,0,0,32,33,3,11,5,0,33,6,1,0,
	0,0,34,35,5,96,0,0,35,36,5,96,0,0,36,37,5,96,0,0,37,39,1,0,0,0,38,40,8,
	2,0,0,39,38,1,0,0,0,40,41,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,43,1,0,
	0,0,43,44,5,96,0,0,44,45,5,96,0,0,45,46,5,96,0,0,46,8,1,0,0,0,47,49,5,13,
	0,0,48,47,1,0,0,0,48,49,1,0,0,0,49,50,1,0,0,0,50,51,5,10,0,0,51,10,1,0,
	0,0,52,53,5,96,0,0,53,12,1,0,0,0,54,55,7,3,0,0,55,14,1,0,0,0,56,57,5,35,
	0,0,57,16,1,0,0,0,5,0,20,30,41,48,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MarkdownLexer.__ATN) {
			MarkdownLexer.__ATN = new ATNDeserializer().deserialize(MarkdownLexer._serializedATN);
		}

		return MarkdownLexer.__ATN;
	}


	static DecisionsToDFA = MarkdownLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}