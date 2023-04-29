// Generated from ./lib/g4/Markdown.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MarkdownListener } from "./MarkdownListener";
import { MarkdownVisitor } from "./MarkdownVisitor";


export class MarkdownParser extends Parser {
	public static readonly BOLD_TEXT = 1;
	public static readonly ITALIC_TEXT = 2;
	public static readonly INLINE_CODE = 3;
	public static readonly CODE_BLOCK = 4;
	public static readonly TEXT = 5;
	public static readonly HASH = 6;
	public static readonly HASH_WS = 7;
	public static readonly STAR = 8;
	public static readonly DIGITS = 9;
	public static readonly DOT = 10;
	public static readonly WS = 11;
	public static readonly UNDERSCORE = 12;
	public static readonly BACKTICK = 13;
	public static readonly ASTERISK = 14;
	public static readonly DOUBLE_ASTERISK = 15;
	public static readonly DOUBLE_UNDERSCORE = 16;
	public static readonly TRIPLE_BACKTICK = 17;
	public static readonly NL = 18;
	public static readonly RULE_markdown = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_header = 2;
	public static readonly RULE_headerFlag = 3;
	public static readonly RULE_unorderedList = 4;
	public static readonly RULE_orderedList = 5;
	public static readonly RULE_textLine = 6;
	public static readonly RULE_inlineText = 7;
	public static readonly RULE_blankLine = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"markdown", "block", "header", "headerFlag", "unorderedList", "orderedList", 
		"textLine", "inlineText", "blankLine",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "'#'", 
		undefined, "'*'", undefined, "'.'", undefined, "'_'", "'`'", "'\\'", "'**'", 
		"'__'", "'```'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "BOLD_TEXT", "ITALIC_TEXT", "INLINE_CODE", "CODE_BLOCK", "TEXT", 
		"HASH", "HASH_WS", "STAR", "DIGITS", "DOT", "WS", "UNDERSCORE", "BACKTICK", 
		"ASTERISK", "DOUBLE_ASTERISK", "DOUBLE_UNDERSCORE", "TRIPLE_BACKTICK", 
		"NL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MarkdownParser._LITERAL_NAMES, MarkdownParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MarkdownParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Markdown.g4"; }

	// @Override
	public get ruleNames(): string[] { return MarkdownParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MarkdownParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MarkdownParser._ATN, this);
	}
	// @RuleVersion(0)
	public markdown(): MarkdownContext {
		let _localctx: MarkdownContext = new MarkdownContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MarkdownParser.RULE_markdown);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MarkdownParser.BOLD_TEXT) | (1 << MarkdownParser.ITALIC_TEXT) | (1 << MarkdownParser.INLINE_CODE) | (1 << MarkdownParser.TEXT) | (1 << MarkdownParser.HASH_WS) | (1 << MarkdownParser.STAR) | (1 << MarkdownParser.DIGITS) | (1 << MarkdownParser.NL))) !== 0)) {
				{
				this.state = 20;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 18;
					this.block();
					}
					break;

				case 2:
					{
					this.state = 19;
					this.blankLine();
					}
					break;
				}
				}
				this.state = 24;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 25;
			this.match(MarkdownParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MarkdownParser.RULE_block);
		try {
			this.state = 31;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MarkdownParser.HASH_WS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 27;
				this.header();
				}
				break;
			case MarkdownParser.STAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 28;
				this.unorderedList();
				}
				break;
			case MarkdownParser.DIGITS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 29;
				this.orderedList();
				}
				break;
			case MarkdownParser.BOLD_TEXT:
			case MarkdownParser.ITALIC_TEXT:
			case MarkdownParser.INLINE_CODE:
			case MarkdownParser.TEXT:
			case MarkdownParser.NL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 30;
				this.textLine();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public header(): HeaderContext {
		let _localctx: HeaderContext = new HeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MarkdownParser.RULE_header);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this.headerFlag();
			this.state = 34;
			this.inlineText();
			this.state = 35;
			this.match(MarkdownParser.NL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public headerFlag(): HeaderFlagContext {
		let _localctx: HeaderFlagContext = new HeaderFlagContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MarkdownParser.RULE_headerFlag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this.match(MarkdownParser.HASH_WS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unorderedList(): UnorderedListContext {
		let _localctx: UnorderedListContext = new UnorderedListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MarkdownParser.RULE_unorderedList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.match(MarkdownParser.STAR);
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MarkdownParser.WS) {
				{
				this.state = 40;
				this.match(MarkdownParser.WS);
				}
			}

			this.state = 43;
			this.inlineText();
			this.state = 44;
			this.match(MarkdownParser.NL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderedList(): OrderedListContext {
		let _localctx: OrderedListContext = new OrderedListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MarkdownParser.RULE_orderedList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this.match(MarkdownParser.DIGITS);
			this.state = 47;
			this.match(MarkdownParser.DOT);
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MarkdownParser.WS) {
				{
				this.state = 48;
				this.match(MarkdownParser.WS);
				}
			}

			this.state = 51;
			this.inlineText();
			this.state = 52;
			this.match(MarkdownParser.NL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public textLine(): TextLineContext {
		let _localctx: TextLineContext = new TextLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MarkdownParser.RULE_textLine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this.inlineText();
			this.state = 55;
			this.match(MarkdownParser.NL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inlineText(): InlineTextContext {
		let _localctx: InlineTextContext = new InlineTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, MarkdownParser.RULE_inlineText);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MarkdownParser.BOLD_TEXT) | (1 << MarkdownParser.ITALIC_TEXT) | (1 << MarkdownParser.INLINE_CODE) | (1 << MarkdownParser.TEXT))) !== 0)) {
				{
				{
				this.state = 57;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MarkdownParser.BOLD_TEXT) | (1 << MarkdownParser.ITALIC_TEXT) | (1 << MarkdownParser.INLINE_CODE) | (1 << MarkdownParser.TEXT))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blankLine(): BlankLineContext {
		let _localctx: BlankLineContext = new BlankLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MarkdownParser.RULE_blankLine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.match(MarkdownParser.NL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14D\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x07\x02\x17\n\x02" +
		"\f\x02\x0E\x02\x1A\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03\"\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x05\x06,\n\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x05\x074\n\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\t\x07\t" +
		"=\n\t\f\t\x0E\t@\v\t\x03\n\x03\n\x03\n\x02\x02\x02\v\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x03\x04\x02\x03\x05" +
		"\x07\x07\x02B\x02\x18\x03\x02\x02\x02\x04!\x03\x02\x02\x02\x06#\x03\x02" +
		"\x02\x02\b\'\x03\x02\x02\x02\n)\x03\x02\x02\x02\f0\x03\x02\x02\x02\x0E" +
		"8\x03\x02\x02\x02\x10>\x03\x02\x02\x02\x12A\x03\x02\x02\x02\x14\x17\x05" +
		"\x04\x03\x02\x15\x17\x05\x12\n\x02\x16\x14\x03\x02\x02\x02\x16\x15\x03" +
		"\x02\x02\x02\x17\x1A\x03\x02\x02\x02\x18\x16\x03\x02\x02\x02\x18\x19\x03" +
		"\x02\x02\x02\x19\x1B\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1B\x1C\x07" +
		"\x02\x02\x03\x1C\x03\x03\x02\x02\x02\x1D\"\x05\x06\x04\x02\x1E\"\x05\n" +
		"\x06\x02\x1F\"\x05\f\x07\x02 \"\x05\x0E\b\x02!\x1D\x03\x02\x02\x02!\x1E" +
		"\x03\x02\x02\x02!\x1F\x03\x02\x02\x02! \x03\x02\x02\x02\"\x05\x03\x02" +
		"\x02\x02#$\x05\b\x05\x02$%\x05\x10\t\x02%&\x07\x14\x02\x02&\x07\x03\x02" +
		"\x02\x02\'(\x07\t\x02\x02(\t\x03\x02\x02\x02)+\x07\n\x02\x02*,\x07\r\x02" +
		"\x02+*\x03\x02\x02\x02+,\x03\x02\x02\x02,-\x03\x02\x02\x02-.\x05\x10\t" +
		"\x02./\x07\x14\x02\x02/\v\x03\x02\x02\x0201\x07\v\x02\x0213\x07\f\x02" +
		"\x0224\x07\r\x02\x0232\x03\x02\x02\x0234\x03\x02\x02\x0245\x03\x02\x02" +
		"\x0256\x05\x10\t\x0267\x07\x14\x02\x027\r\x03\x02\x02\x0289\x05\x10\t" +
		"\x029:\x07\x14\x02\x02:\x0F\x03\x02\x02\x02;=\t\x02\x02\x02<;\x03\x02" +
		"\x02\x02=@\x03\x02\x02\x02><\x03\x02\x02\x02>?\x03\x02\x02\x02?\x11\x03" +
		"\x02\x02\x02@>\x03\x02\x02\x02AB\x07\x14\x02\x02B\x13\x03\x02\x02\x02" +
		"\b\x16\x18!+3>";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MarkdownParser.__ATN) {
			MarkdownParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MarkdownParser._serializedATN));
		}

		return MarkdownParser.__ATN;
	}

}

export class MarkdownContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(MarkdownParser.EOF, 0); }
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public blankLine(): BlankLineContext[];
	public blankLine(i: number): BlankLineContext;
	public blankLine(i?: number): BlankLineContext | BlankLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlankLineContext);
		} else {
			return this.getRuleContext(i, BlankLineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MarkdownParser.RULE_markdown; }
	// @Override
	public enterRule(listener: MarkdownListener): void {
		if (listener.enterMarkdown) {
			listener.enterMarkdown(this);
		}
	}
	// @Override
	public exitRule(listener: MarkdownListener): void {
		if (listener.exitMarkdown) {
			listener.exitMarkdown(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MarkdownVisitor<Result>): Result {
		if (visitor.visitMarkdown) {
			return visitor.visitMarkdown(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public header(): HeaderContext | undefined {
		return this.tryGetRuleContext(0, HeaderContext);
	}
	public unorderedList(): UnorderedListContext | undefined {
		return this.tryGetRuleContext(0, UnorderedListContext);
	}
	public orderedList(): OrderedListContext | undefined {
		return this.tryGetRuleContext(0, OrderedListContext);
	}
	public textLine(): TextLineContext | undefined {
		return this.tryGetRuleContext(0, TextLineContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MarkdownParser.RULE_block; }
	// @Override
	public enterRule(listener: MarkdownListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: MarkdownListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MarkdownVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HeaderContext extends ParserRuleContext {
	public headerFlag(): HeaderFlagContext {
		return this.getRuleContext(0, HeaderFlagContext);
	}
	public inlineText(): InlineTextContext {
		return this.getRuleContext(0, InlineTextContext);
	}
	public NL(): TerminalNode { return this.getToken(MarkdownParser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MarkdownParser.RULE_header; }
	// @Override
	public enterRule(listener: MarkdownListener): void {
		if (listener.enterHeader) {
			listener.enterHeader(this);
		}
	}
	// @Override
	public exitRule(listener: MarkdownListener): void {
		if (listener.exitHeader) {
			listener.exitHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MarkdownVisitor<Result>): Result {
		if (visitor.visitHeader) {
			return visitor.visitHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HeaderFlagContext extends ParserRuleContext {
	public HASH_WS(): TerminalNode { return this.getToken(MarkdownParser.HASH_WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MarkdownParser.RULE_headerFlag; }
	// @Override
	public enterRule(listener: MarkdownListener): void {
		if (listener.enterHeaderFlag) {
			listener.enterHeaderFlag(this);
		}
	}
	// @Override
	public exitRule(listener: MarkdownListener): void {
		if (listener.exitHeaderFlag) {
			listener.exitHeaderFlag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MarkdownVisitor<Result>): Result {
		if (visitor.visitHeaderFlag) {
			return visitor.visitHeaderFlag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnorderedListContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(MarkdownParser.STAR, 0); }
	public inlineText(): InlineTextContext {
		return this.getRuleContext(0, InlineTextContext);
	}
	public NL(): TerminalNode { return this.getToken(MarkdownParser.NL, 0); }
	public WS(): TerminalNode | undefined { return this.tryGetToken(MarkdownParser.WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MarkdownParser.RULE_unorderedList; }
	// @Override
	public enterRule(listener: MarkdownListener): void {
		if (listener.enterUnorderedList) {
			listener.enterUnorderedList(this);
		}
	}
	// @Override
	public exitRule(listener: MarkdownListener): void {
		if (listener.exitUnorderedList) {
			listener.exitUnorderedList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MarkdownVisitor<Result>): Result {
		if (visitor.visitUnorderedList) {
			return visitor.visitUnorderedList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderedListContext extends ParserRuleContext {
	public DIGITS(): TerminalNode { return this.getToken(MarkdownParser.DIGITS, 0); }
	public DOT(): TerminalNode { return this.getToken(MarkdownParser.DOT, 0); }
	public inlineText(): InlineTextContext {
		return this.getRuleContext(0, InlineTextContext);
	}
	public NL(): TerminalNode { return this.getToken(MarkdownParser.NL, 0); }
	public WS(): TerminalNode | undefined { return this.tryGetToken(MarkdownParser.WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MarkdownParser.RULE_orderedList; }
	// @Override
	public enterRule(listener: MarkdownListener): void {
		if (listener.enterOrderedList) {
			listener.enterOrderedList(this);
		}
	}
	// @Override
	public exitRule(listener: MarkdownListener): void {
		if (listener.exitOrderedList) {
			listener.exitOrderedList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MarkdownVisitor<Result>): Result {
		if (visitor.visitOrderedList) {
			return visitor.visitOrderedList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TextLineContext extends ParserRuleContext {
	public inlineText(): InlineTextContext {
		return this.getRuleContext(0, InlineTextContext);
	}
	public NL(): TerminalNode { return this.getToken(MarkdownParser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MarkdownParser.RULE_textLine; }
	// @Override
	public enterRule(listener: MarkdownListener): void {
		if (listener.enterTextLine) {
			listener.enterTextLine(this);
		}
	}
	// @Override
	public exitRule(listener: MarkdownListener): void {
		if (listener.exitTextLine) {
			listener.exitTextLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MarkdownVisitor<Result>): Result {
		if (visitor.visitTextLine) {
			return visitor.visitTextLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineTextContext extends ParserRuleContext {
	public BOLD_TEXT(): TerminalNode[];
	public BOLD_TEXT(i: number): TerminalNode;
	public BOLD_TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MarkdownParser.BOLD_TEXT);
		} else {
			return this.getToken(MarkdownParser.BOLD_TEXT, i);
		}
	}
	public ITALIC_TEXT(): TerminalNode[];
	public ITALIC_TEXT(i: number): TerminalNode;
	public ITALIC_TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MarkdownParser.ITALIC_TEXT);
		} else {
			return this.getToken(MarkdownParser.ITALIC_TEXT, i);
		}
	}
	public INLINE_CODE(): TerminalNode[];
	public INLINE_CODE(i: number): TerminalNode;
	public INLINE_CODE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MarkdownParser.INLINE_CODE);
		} else {
			return this.getToken(MarkdownParser.INLINE_CODE, i);
		}
	}
	public TEXT(): TerminalNode[];
	public TEXT(i: number): TerminalNode;
	public TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MarkdownParser.TEXT);
		} else {
			return this.getToken(MarkdownParser.TEXT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MarkdownParser.RULE_inlineText; }
	// @Override
	public enterRule(listener: MarkdownListener): void {
		if (listener.enterInlineText) {
			listener.enterInlineText(this);
		}
	}
	// @Override
	public exitRule(listener: MarkdownListener): void {
		if (listener.exitInlineText) {
			listener.exitInlineText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MarkdownVisitor<Result>): Result {
		if (visitor.visitInlineText) {
			return visitor.visitInlineText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlankLineContext extends ParserRuleContext {
	public NL(): TerminalNode { return this.getToken(MarkdownParser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MarkdownParser.RULE_blankLine; }
	// @Override
	public enterRule(listener: MarkdownListener): void {
		if (listener.enterBlankLine) {
			listener.enterBlankLine(this);
		}
	}
	// @Override
	public exitRule(listener: MarkdownListener): void {
		if (listener.exitBlankLine) {
			listener.exitBlankLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MarkdownVisitor<Result>): Result {
		if (visitor.visitBlankLine) {
			return visitor.visitBlankLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


