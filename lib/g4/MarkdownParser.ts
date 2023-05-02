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
	public static readonly HEADER = 1;
	public static readonly CHAR = 2;
	public static readonly INLINE_CODE = 3;
	public static readonly BLOCK_CODE = 4;
	public static readonly BACKTICK = 5;
	public static readonly NL = 6;
	public static readonly RULE_markdown = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_inlineHeader = 2;
	public static readonly RULE_header = 3;
	public static readonly RULE_inlineText = 4;
	public static readonly RULE_textContent = 5;
	public static readonly RULE_blockCode = 6;
	public static readonly RULE_text = 7;
	public static readonly RULE_inlineCode = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"markdown", "block", "inlineHeader", "header", "inlineText", "textContent", 
		"blockCode", "text", "inlineCode",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'`'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "HEADER", "CHAR", "INLINE_CODE", "BLOCK_CODE", "BACKTICK", 
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
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MarkdownParser.HEADER) | (1 << MarkdownParser.CHAR) | (1 << MarkdownParser.INLINE_CODE) | (1 << MarkdownParser.BLOCK_CODE) | (1 << MarkdownParser.NL))) !== 0)) {
				{
				{
				this.state = 18;
				this.block();
				}
				}
				this.state = 23;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 24;
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
			this.state = 30;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MarkdownParser.HEADER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 26;
				this.inlineHeader();
				}
				break;
			case MarkdownParser.CHAR:
			case MarkdownParser.INLINE_CODE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 27;
				this.inlineText();
				}
				break;
			case MarkdownParser.BLOCK_CODE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 28;
				this.blockCode();
				}
				break;
			case MarkdownParser.NL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 29;
				this.match(MarkdownParser.NL);
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
	public inlineHeader(): InlineHeaderContext {
		let _localctx: InlineHeaderContext = new InlineHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MarkdownParser.RULE_inlineHeader);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this.header();
			this.state = 33;
			this.textContent();
			this.state = 34;
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
	public header(): HeaderContext {
		let _localctx: HeaderContext = new HeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MarkdownParser.RULE_header);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this.match(MarkdownParser.HEADER);
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
		this.enterRule(_localctx, 8, MarkdownParser.RULE_inlineText);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.textContent();
			this.state = 39;
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
	public textContent(): TextContentContext {
		let _localctx: TextContentContext = new TextContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MarkdownParser.RULE_textContent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 43;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case MarkdownParser.INLINE_CODE:
					{
					this.state = 41;
					this.inlineCode();
					}
					break;
				case MarkdownParser.CHAR:
					{
					this.state = 42;
					this.text();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === MarkdownParser.CHAR || _la === MarkdownParser.INLINE_CODE);
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
	public blockCode(): BlockCodeContext {
		let _localctx: BlockCodeContext = new BlockCodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MarkdownParser.RULE_blockCode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this.match(MarkdownParser.BLOCK_CODE);
			this.state = 48;
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
	public text(): TextContext {
		let _localctx: TextContext = new TextContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, MarkdownParser.RULE_text);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 50;
					this.match(MarkdownParser.CHAR);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 53;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public inlineCode(): InlineCodeContext {
		let _localctx: InlineCodeContext = new InlineCodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MarkdownParser.RULE_inlineCode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this.match(MarkdownParser.INLINE_CODE);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\b<\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x07\x02\x16\n\x02\f\x02\x0E" +
		"\x02\x19\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"!\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x06\x07.\n\x07\r\x07\x0E\x07/\x03\b\x03\b\x03" +
		"\b\x03\t\x06\t6\n\t\r\t\x0E\t7\x03\n\x03\n\x03\n\x02\x02\x02\v\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x02\x02" +
		"9\x02\x17\x03\x02\x02\x02\x04 \x03\x02\x02\x02\x06\"\x03\x02\x02\x02\b" +
		"&\x03\x02\x02\x02\n(\x03\x02\x02\x02\f-\x03\x02\x02\x02\x0E1\x03\x02\x02" +
		"\x02\x105\x03\x02\x02\x02\x129\x03\x02\x02\x02\x14\x16\x05\x04\x03\x02" +
		"\x15\x14\x03\x02\x02\x02\x16\x19\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02" +
		"\x17\x18\x03\x02\x02\x02\x18\x1A\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02" +
		"\x1A\x1B\x07\x02\x02\x03\x1B\x03\x03\x02\x02\x02\x1C!\x05\x06\x04\x02" +
		"\x1D!\x05\n\x06\x02\x1E!\x05\x0E\b\x02\x1F!\x07\b\x02\x02 \x1C\x03\x02" +
		"\x02\x02 \x1D\x03\x02\x02\x02 \x1E\x03\x02\x02\x02 \x1F\x03\x02\x02\x02" +
		"!\x05\x03\x02\x02\x02\"#\x05\b\x05\x02#$\x05\f\x07\x02$%\x07\b\x02\x02" +
		"%\x07\x03\x02\x02\x02&\'\x07\x03\x02\x02\'\t\x03\x02\x02\x02()\x05\f\x07" +
		"\x02)*\x07\b\x02\x02*\v\x03\x02\x02\x02+.\x05\x12\n\x02,.\x05\x10\t\x02" +
		"-+\x03\x02\x02\x02-,\x03\x02\x02\x02./\x03\x02\x02\x02/-\x03\x02\x02\x02" +
		"/0\x03\x02\x02\x020\r\x03\x02\x02\x0212\x07\x06\x02\x0223\x07\b\x02\x02" +
		"3\x0F\x03\x02\x02\x0246\x07\x04\x02\x0254\x03\x02\x02\x0267\x03\x02\x02" +
		"\x0275\x03\x02\x02\x0278\x03\x02\x02\x028\x11\x03\x02\x02\x029:\x07\x05" +
		"\x02\x02:\x13\x03\x02\x02\x02\x07\x17 -/7";
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
	public inlineHeader(): InlineHeaderContext | undefined {
		return this.tryGetRuleContext(0, InlineHeaderContext);
	}
	public inlineText(): InlineTextContext | undefined {
		return this.tryGetRuleContext(0, InlineTextContext);
	}
	public blockCode(): BlockCodeContext | undefined {
		return this.tryGetRuleContext(0, BlockCodeContext);
	}
	public NL(): TerminalNode | undefined { return this.tryGetToken(MarkdownParser.NL, 0); }
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


export class InlineHeaderContext extends ParserRuleContext {
	public header(): HeaderContext {
		return this.getRuleContext(0, HeaderContext);
	}
	public textContent(): TextContentContext {
		return this.getRuleContext(0, TextContentContext);
	}
	public NL(): TerminalNode { return this.getToken(MarkdownParser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MarkdownParser.RULE_inlineHeader; }
	// @Override
	public enterRule(listener: MarkdownListener): void {
		if (listener.enterInlineHeader) {
			listener.enterInlineHeader(this);
		}
	}
	// @Override
	public exitRule(listener: MarkdownListener): void {
		if (listener.exitInlineHeader) {
			listener.exitInlineHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MarkdownVisitor<Result>): Result {
		if (visitor.visitInlineHeader) {
			return visitor.visitInlineHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HeaderContext extends ParserRuleContext {
	public HEADER(): TerminalNode { return this.getToken(MarkdownParser.HEADER, 0); }
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


export class InlineTextContext extends ParserRuleContext {
	public textContent(): TextContentContext {
		return this.getRuleContext(0, TextContentContext);
	}
	public NL(): TerminalNode { return this.getToken(MarkdownParser.NL, 0); }
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


export class TextContentContext extends ParserRuleContext {
	public inlineCode(): InlineCodeContext[];
	public inlineCode(i: number): InlineCodeContext;
	public inlineCode(i?: number): InlineCodeContext | InlineCodeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InlineCodeContext);
		} else {
			return this.getRuleContext(i, InlineCodeContext);
		}
	}
	public text(): TextContext[];
	public text(i: number): TextContext;
	public text(i?: number): TextContext | TextContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TextContext);
		} else {
			return this.getRuleContext(i, TextContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MarkdownParser.RULE_textContent; }
	// @Override
	public enterRule(listener: MarkdownListener): void {
		if (listener.enterTextContent) {
			listener.enterTextContent(this);
		}
	}
	// @Override
	public exitRule(listener: MarkdownListener): void {
		if (listener.exitTextContent) {
			listener.exitTextContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MarkdownVisitor<Result>): Result {
		if (visitor.visitTextContent) {
			return visitor.visitTextContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockCodeContext extends ParserRuleContext {
	public BLOCK_CODE(): TerminalNode { return this.getToken(MarkdownParser.BLOCK_CODE, 0); }
	public NL(): TerminalNode { return this.getToken(MarkdownParser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MarkdownParser.RULE_blockCode; }
	// @Override
	public enterRule(listener: MarkdownListener): void {
		if (listener.enterBlockCode) {
			listener.enterBlockCode(this);
		}
	}
	// @Override
	public exitRule(listener: MarkdownListener): void {
		if (listener.exitBlockCode) {
			listener.exitBlockCode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MarkdownVisitor<Result>): Result {
		if (visitor.visitBlockCode) {
			return visitor.visitBlockCode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TextContext extends ParserRuleContext {
	public CHAR(): TerminalNode[];
	public CHAR(i: number): TerminalNode;
	public CHAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MarkdownParser.CHAR);
		} else {
			return this.getToken(MarkdownParser.CHAR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MarkdownParser.RULE_text; }
	// @Override
	public enterRule(listener: MarkdownListener): void {
		if (listener.enterText) {
			listener.enterText(this);
		}
	}
	// @Override
	public exitRule(listener: MarkdownListener): void {
		if (listener.exitText) {
			listener.exitText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MarkdownVisitor<Result>): Result {
		if (visitor.visitText) {
			return visitor.visitText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineCodeContext extends ParserRuleContext {
	public INLINE_CODE(): TerminalNode { return this.getToken(MarkdownParser.INLINE_CODE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MarkdownParser.RULE_inlineCode; }
	// @Override
	public enterRule(listener: MarkdownListener): void {
		if (listener.enterInlineCode) {
			listener.enterInlineCode(this);
		}
	}
	// @Override
	public exitRule(listener: MarkdownListener): void {
		if (listener.exitInlineCode) {
			listener.exitInlineCode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MarkdownVisitor<Result>): Result {
		if (visitor.visitInlineCode) {
			return visitor.visitInlineCode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


