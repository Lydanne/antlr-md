// Generated from ./lib/g4/Markdown.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class MarkdownLexer extends Lexer {
	public static readonly HEADER = 1;
	public static readonly CHAR = 2;
	public static readonly INLINE_CODE = 3;
	public static readonly BLOCK_CODE = 4;
	public static readonly NL = 5;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"HEADER", "CHAR", "INLINE_CODE", "BLOCK_CODE", "NL", "BACKTICK", "WS", 
		"HASH",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "HEADER", "CHAR", "INLINE_CODE", "BLOCK_CODE", "NL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MarkdownLexer._LITERAL_NAMES, MarkdownLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MarkdownLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(MarkdownLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Markdown.g4"; }

	// @Override
	public get ruleNames(): string[] { return MarkdownLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return MarkdownLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return MarkdownLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return MarkdownLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x07<\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x06\x02\x15\n\x02\r\x02\x0E\x02" +
		"\x16\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x06\x04\x1F\n\x04" +
		"\r\x04\x0E\x04 \x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x06\x05*\n\x05\r\x05\x0E\x05+\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06" +
		"\x05\x063\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03" +
		"\t\x02\x02\x02\n\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07" +
		"\r\x02\x02\x0F\x02\x02\x11\x02\x02\x03\x02\x06\x04\x02\f\f\x0F\x0F\x05" +
		"\x02\f\f\x0F\x0Fbb\x03\x02bb\x04\x02\v\v\"\"\x02<\x02\x03\x03\x02\x02" +
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
		"\x02\x02\v\x03\x02\x02\x02\x03\x14\x03\x02\x02\x02\x05\x1A\x03\x02\x02" +
		"\x02\x07\x1C\x03\x02\x02\x02\t$\x03\x02\x02\x02\v2\x03\x02\x02\x02\r6" +
		"\x03\x02\x02\x02\x0F8\x03\x02\x02\x02\x11:\x03\x02\x02\x02\x13\x15\x05" +
		"\x11\t\x02\x14\x13\x03\x02\x02\x02\x15\x16\x03\x02\x02\x02\x16\x14\x03" +
		"\x02\x02\x02\x16\x17\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x19\x05" +
		"\x0F\b\x02\x19\x04\x03\x02\x02\x02\x1A\x1B\n\x02\x02\x02\x1B\x06\x03\x02" +
		"\x02\x02\x1C\x1E\x05\r\x07\x02\x1D\x1F\n\x03\x02\x02\x1E\x1D\x03\x02\x02" +
		"\x02\x1F \x03\x02\x02\x02 \x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!\"\x03" +
		"\x02\x02\x02\"#\x05\r\x07\x02#\b\x03\x02\x02\x02$%\x07b\x02\x02%&\x07" +
		"b\x02\x02&\'\x07b\x02\x02\')\x03\x02\x02\x02(*\n\x04\x02\x02)(\x03\x02" +
		"\x02\x02*+\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,-\x03\x02" +
		"\x02\x02-.\x07b\x02\x02./\x07b\x02\x02/0\x07b\x02\x020\n\x03\x02\x02\x02" +
		"13\x07\x0F\x02\x0221\x03\x02\x02\x0223\x03\x02\x02\x0234\x03\x02\x02\x02" +
		"45\x07\f\x02\x025\f\x03\x02\x02\x0267\x07b\x02\x027\x0E\x03\x02\x02\x02" +
		"89\t\x05\x02\x029\x10\x03\x02\x02\x02:;\x07%\x02\x02;\x12\x03\x02\x02" +
		"\x02\x07\x02\x16 +2\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MarkdownLexer.__ATN) {
			MarkdownLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MarkdownLexer._serializedATN));
		}

		return MarkdownLexer.__ATN;
	}

}

