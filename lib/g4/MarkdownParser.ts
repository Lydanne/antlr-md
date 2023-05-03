// @ts-nocheck
// Generated from ./lib/g4/Markdown.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import MarkdownListener from "./MarkdownListener.js";
import MarkdownVisitor from "./MarkdownVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MarkdownParser extends Parser {
	public static readonly HEADER = 1;
	public static readonly CHAR = 2;
	public static readonly INLINE_CODE = 3;
	public static readonly BLOCK_CODE = 4;
	public static readonly NL = 5;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_markdown = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_inlineHeader = 2;
	public static readonly RULE_header = 3;
	public static readonly RULE_inlineText = 4;
	public static readonly RULE_textContent = 5;
	public static readonly RULE_blockCode = 6;
	public static readonly RULE_str = 7;
	public static readonly RULE_inlineCode = 8;
	public static readonly literalNames: (string | null)[] = [  ];
	public static readonly symbolicNames: (string | null)[] = [ null, "HEADER", 
                                                             "CHAR", "INLINE_CODE", 
                                                             "BLOCK_CODE", 
                                                             "NL" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"markdown", "block", "inlineHeader", "header", "inlineText", "textContent", 
		"blockCode", "str", "inlineCode",
	];
	public get grammarFileName(): string { return "Markdown.g4"; }
	public get literalNames(): (string | null)[] { return MarkdownParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return MarkdownParser.symbolicNames; }
	public get ruleNames(): string[] { return MarkdownParser.ruleNames; }
	public get serializedATN(): number[] { return MarkdownParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, MarkdownParser._ATN, MarkdownParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public markdown(): MarkdownContext {
		let localctx: MarkdownContext = new MarkdownContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MarkdownParser.RULE_markdown);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 62) !== 0)) {
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
			this.state = 25;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 24;
				this.match(MarkdownParser.EOF);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MarkdownParser.RULE_block);
		try {
			this.state = 31;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 27;
				this.inlineHeader();
				}
				break;
			case 2:
			case 3:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 28;
				this.inlineText();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 29;
				this.blockCode();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 30;
				this.match(MarkdownParser.NL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inlineHeader(): InlineHeaderContext {
		let localctx: InlineHeaderContext = new InlineHeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MarkdownParser.RULE_inlineHeader);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 33;
			this.header();
			this.state = 34;
			this.textContent();
			this.state = 36;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 35;
				this.match(MarkdownParser.NL);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public header(): HeaderContext {
		let localctx: HeaderContext = new HeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, MarkdownParser.RULE_header);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 38;
			this.match(MarkdownParser.HEADER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inlineText(): InlineTextContext {
		let localctx: InlineTextContext = new InlineTextContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MarkdownParser.RULE_inlineText);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 40;
			this.textContent();
			this.state = 42;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 41;
				this.match(MarkdownParser.NL);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public textContent(): TextContentContext {
		let localctx: TextContentContext = new TextContentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, MarkdownParser.RULE_textContent);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 46;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 46;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 3:
						{
						this.state = 44;
						this.inlineCode();
						}
						break;
					case 2:
						{
						this.state = 45;
						this.str();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 48;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockCode(): BlockCodeContext {
		let localctx: BlockCodeContext = new BlockCodeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, MarkdownParser.RULE_blockCode);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 50;
			this.match(MarkdownParser.BLOCK_CODE);
			this.state = 52;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 51;
				this.match(MarkdownParser.NL);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public str(): StrContext {
		let localctx: StrContext = new StrContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, MarkdownParser.RULE_str);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 55;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 54;
					this.match(MarkdownParser.CHAR);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 57;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inlineCode(): InlineCodeContext {
		let localctx: InlineCodeContext = new InlineCodeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, MarkdownParser.RULE_inlineCode);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 59;
			this.match(MarkdownParser.INLINE_CODE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,5,62,2,0,7,0,2,1,
	7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,5,0,20,
	8,0,10,0,12,0,23,9,0,1,0,3,0,26,8,0,1,1,1,1,1,1,1,1,3,1,32,8,1,1,2,1,2,
	1,2,3,2,37,8,2,1,3,1,3,1,4,1,4,3,4,43,8,4,1,5,1,5,4,5,47,8,5,11,5,12,5,
	48,1,6,1,6,3,6,53,8,6,1,7,4,7,56,8,7,11,7,12,7,57,1,8,1,8,1,8,0,0,9,0,2,
	4,6,8,10,12,14,16,0,0,63,0,21,1,0,0,0,2,31,1,0,0,0,4,33,1,0,0,0,6,38,1,
	0,0,0,8,40,1,0,0,0,10,46,1,0,0,0,12,50,1,0,0,0,14,55,1,0,0,0,16,59,1,0,
	0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,
	0,22,25,1,0,0,0,23,21,1,0,0,0,24,26,5,0,0,1,25,24,1,0,0,0,25,26,1,0,0,0,
	26,1,1,0,0,0,27,32,3,4,2,0,28,32,3,8,4,0,29,32,3,12,6,0,30,32,5,5,0,0,31,
	27,1,0,0,0,31,28,1,0,0,0,31,29,1,0,0,0,31,30,1,0,0,0,32,3,1,0,0,0,33,34,
	3,6,3,0,34,36,3,10,5,0,35,37,5,5,0,0,36,35,1,0,0,0,36,37,1,0,0,0,37,5,1,
	0,0,0,38,39,5,1,0,0,39,7,1,0,0,0,40,42,3,10,5,0,41,43,5,5,0,0,42,41,1,0,
	0,0,42,43,1,0,0,0,43,9,1,0,0,0,44,47,3,16,8,0,45,47,3,14,7,0,46,44,1,0,
	0,0,46,45,1,0,0,0,47,48,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,11,1,0,0,
	0,50,52,5,4,0,0,51,53,5,5,0,0,52,51,1,0,0,0,52,53,1,0,0,0,53,13,1,0,0,0,
	54,56,5,2,0,0,55,54,1,0,0,0,56,57,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,
	15,1,0,0,0,59,60,5,3,0,0,60,17,1,0,0,0,9,21,25,31,36,42,46,48,52,57];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MarkdownParser.__ATN) {
			MarkdownParser.__ATN = new ATNDeserializer().deserialize(MarkdownParser._serializedATN);
		}

		return MarkdownParser.__ATN;
	}


	static DecisionsToDFA = MarkdownParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class MarkdownContext extends ParserRuleContext {
	constructor(parser?: MarkdownParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(MarkdownParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return MarkdownParser.RULE_markdown;
	}
	public enterRule(listener: MarkdownListener): void {
	    if(listener.enterMarkdown) {
	 		listener.enterMarkdown(this);
		}
	}
	public exitRule(listener: MarkdownListener): void {
	    if(listener.exitMarkdown) {
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
	constructor(parser?: MarkdownParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public inlineHeader(): InlineHeaderContext {
		return this.getTypedRuleContext(InlineHeaderContext, 0) as InlineHeaderContext;
	}
	public inlineText(): InlineTextContext {
		return this.getTypedRuleContext(InlineTextContext, 0) as InlineTextContext;
	}
	public blockCode(): BlockCodeContext {
		return this.getTypedRuleContext(BlockCodeContext, 0) as BlockCodeContext;
	}
	public NL(): TerminalNode {
		return this.getToken(MarkdownParser.NL, 0);
	}
    public get ruleIndex(): number {
    	return MarkdownParser.RULE_block;
	}
	public enterRule(listener: MarkdownListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: MarkdownListener): void {
	    if(listener.exitBlock) {
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
	constructor(parser?: MarkdownParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public header(): HeaderContext {
		return this.getTypedRuleContext(HeaderContext, 0) as HeaderContext;
	}
	public textContent(): TextContentContext {
		return this.getTypedRuleContext(TextContentContext, 0) as TextContentContext;
	}
	public NL(): TerminalNode {
		return this.getToken(MarkdownParser.NL, 0);
	}
    public get ruleIndex(): number {
    	return MarkdownParser.RULE_inlineHeader;
	}
	public enterRule(listener: MarkdownListener): void {
	    if(listener.enterInlineHeader) {
	 		listener.enterInlineHeader(this);
		}
	}
	public exitRule(listener: MarkdownListener): void {
	    if(listener.exitInlineHeader) {
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
	constructor(parser?: MarkdownParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HEADER(): TerminalNode {
		return this.getToken(MarkdownParser.HEADER, 0);
	}
    public get ruleIndex(): number {
    	return MarkdownParser.RULE_header;
	}
	public enterRule(listener: MarkdownListener): void {
	    if(listener.enterHeader) {
	 		listener.enterHeader(this);
		}
	}
	public exitRule(listener: MarkdownListener): void {
	    if(listener.exitHeader) {
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
	constructor(parser?: MarkdownParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public textContent(): TextContentContext {
		return this.getTypedRuleContext(TextContentContext, 0) as TextContentContext;
	}
	public NL(): TerminalNode {
		return this.getToken(MarkdownParser.NL, 0);
	}
    public get ruleIndex(): number {
    	return MarkdownParser.RULE_inlineText;
	}
	public enterRule(listener: MarkdownListener): void {
	    if(listener.enterInlineText) {
	 		listener.enterInlineText(this);
		}
	}
	public exitRule(listener: MarkdownListener): void {
	    if(listener.exitInlineText) {
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
	constructor(parser?: MarkdownParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public inlineCode_list(): InlineCodeContext[] {
		return this.getTypedRuleContexts(InlineCodeContext) as InlineCodeContext[];
	}
	public inlineCode(i: number): InlineCodeContext {
		return this.getTypedRuleContext(InlineCodeContext, i) as InlineCodeContext;
	}
	public str_list(): StrContext[] {
		return this.getTypedRuleContexts(StrContext) as StrContext[];
	}
	public str(i: number): StrContext {
		return this.getTypedRuleContext(StrContext, i) as StrContext;
	}
    public get ruleIndex(): number {
    	return MarkdownParser.RULE_textContent;
	}
	public enterRule(listener: MarkdownListener): void {
	    if(listener.enterTextContent) {
	 		listener.enterTextContent(this);
		}
	}
	public exitRule(listener: MarkdownListener): void {
	    if(listener.exitTextContent) {
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
	constructor(parser?: MarkdownParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BLOCK_CODE(): TerminalNode {
		return this.getToken(MarkdownParser.BLOCK_CODE, 0);
	}
	public NL(): TerminalNode {
		return this.getToken(MarkdownParser.NL, 0);
	}
    public get ruleIndex(): number {
    	return MarkdownParser.RULE_blockCode;
	}
	public enterRule(listener: MarkdownListener): void {
	    if(listener.enterBlockCode) {
	 		listener.enterBlockCode(this);
		}
	}
	public exitRule(listener: MarkdownListener): void {
	    if(listener.exitBlockCode) {
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


export class StrContext extends ParserRuleContext {
	constructor(parser?: MarkdownParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHAR_list(): TerminalNode[] {
	    	return this.getTokens(MarkdownParser.CHAR);
	}
	public CHAR(i: number): TerminalNode {
		return this.getToken(MarkdownParser.CHAR, i);
	}
    public get ruleIndex(): number {
    	return MarkdownParser.RULE_str;
	}
	public enterRule(listener: MarkdownListener): void {
	    if(listener.enterStr) {
	 		listener.enterStr(this);
		}
	}
	public exitRule(listener: MarkdownListener): void {
	    if(listener.exitStr) {
	 		listener.exitStr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MarkdownVisitor<Result>): Result {
		if (visitor.visitStr) {
			return visitor.visitStr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineCodeContext extends ParserRuleContext {
	constructor(parser?: MarkdownParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INLINE_CODE(): TerminalNode {
		return this.getToken(MarkdownParser.INLINE_CODE, 0);
	}
    public get ruleIndex(): number {
    	return MarkdownParser.RULE_inlineCode;
	}
	public enterRule(listener: MarkdownListener): void {
	    if(listener.enterInlineCode) {
	 		listener.enterInlineCode(this);
		}
	}
	public exitRule(listener: MarkdownListener): void {
	    if(listener.exitInlineCode) {
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
