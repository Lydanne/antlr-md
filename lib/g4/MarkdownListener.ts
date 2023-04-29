// Generated from ./lib/g4/Markdown.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { MarkdownContext } from "./MarkdownParser";
import { BlockContext } from "./MarkdownParser";
import { HeaderContext } from "./MarkdownParser";
import { HeaderFlagContext } from "./MarkdownParser";
import { UnorderedListContext } from "./MarkdownParser";
import { OrderedListContext } from "./MarkdownParser";
import { TextLineContext } from "./MarkdownParser";
import { InlineTextContext } from "./MarkdownParser";
import { BlankLineContext } from "./MarkdownParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MarkdownParser`.
 */
export interface MarkdownListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MarkdownParser.markdown`.
	 * @param ctx the parse tree
	 */
	enterMarkdown?: (ctx: MarkdownContext) => void;
	/**
	 * Exit a parse tree produced by `MarkdownParser.markdown`.
	 * @param ctx the parse tree
	 */
	exitMarkdown?: (ctx: MarkdownContext) => void;

	/**
	 * Enter a parse tree produced by `MarkdownParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `MarkdownParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `MarkdownParser.header`.
	 * @param ctx the parse tree
	 */
	enterHeader?: (ctx: HeaderContext) => void;
	/**
	 * Exit a parse tree produced by `MarkdownParser.header`.
	 * @param ctx the parse tree
	 */
	exitHeader?: (ctx: HeaderContext) => void;

	/**
	 * Enter a parse tree produced by `MarkdownParser.headerFlag`.
	 * @param ctx the parse tree
	 */
	enterHeaderFlag?: (ctx: HeaderFlagContext) => void;
	/**
	 * Exit a parse tree produced by `MarkdownParser.headerFlag`.
	 * @param ctx the parse tree
	 */
	exitHeaderFlag?: (ctx: HeaderFlagContext) => void;

	/**
	 * Enter a parse tree produced by `MarkdownParser.unorderedList`.
	 * @param ctx the parse tree
	 */
	enterUnorderedList?: (ctx: UnorderedListContext) => void;
	/**
	 * Exit a parse tree produced by `MarkdownParser.unorderedList`.
	 * @param ctx the parse tree
	 */
	exitUnorderedList?: (ctx: UnorderedListContext) => void;

	/**
	 * Enter a parse tree produced by `MarkdownParser.orderedList`.
	 * @param ctx the parse tree
	 */
	enterOrderedList?: (ctx: OrderedListContext) => void;
	/**
	 * Exit a parse tree produced by `MarkdownParser.orderedList`.
	 * @param ctx the parse tree
	 */
	exitOrderedList?: (ctx: OrderedListContext) => void;

	/**
	 * Enter a parse tree produced by `MarkdownParser.textLine`.
	 * @param ctx the parse tree
	 */
	enterTextLine?: (ctx: TextLineContext) => void;
	/**
	 * Exit a parse tree produced by `MarkdownParser.textLine`.
	 * @param ctx the parse tree
	 */
	exitTextLine?: (ctx: TextLineContext) => void;

	/**
	 * Enter a parse tree produced by `MarkdownParser.inlineText`.
	 * @param ctx the parse tree
	 */
	enterInlineText?: (ctx: InlineTextContext) => void;
	/**
	 * Exit a parse tree produced by `MarkdownParser.inlineText`.
	 * @param ctx the parse tree
	 */
	exitInlineText?: (ctx: InlineTextContext) => void;

	/**
	 * Enter a parse tree produced by `MarkdownParser.blankLine`.
	 * @param ctx the parse tree
	 */
	enterBlankLine?: (ctx: BlankLineContext) => void;
	/**
	 * Exit a parse tree produced by `MarkdownParser.blankLine`.
	 * @param ctx the parse tree
	 */
	exitBlankLine?: (ctx: BlankLineContext) => void;
}

