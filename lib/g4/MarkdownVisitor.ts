// Generated from ./lib/g4/Markdown.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MarkdownParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MarkdownVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `MarkdownParser.markdown`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMarkdown?: (ctx: MarkdownContext) => Result;

	/**
	 * Visit a parse tree produced by `MarkdownParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `MarkdownParser.header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeader?: (ctx: HeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `MarkdownParser.headerFlag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeaderFlag?: (ctx: HeaderFlagContext) => Result;

	/**
	 * Visit a parse tree produced by `MarkdownParser.unorderedList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnorderedList?: (ctx: UnorderedListContext) => Result;

	/**
	 * Visit a parse tree produced by `MarkdownParser.orderedList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderedList?: (ctx: OrderedListContext) => Result;

	/**
	 * Visit a parse tree produced by `MarkdownParser.textLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTextLine?: (ctx: TextLineContext) => Result;

	/**
	 * Visit a parse tree produced by `MarkdownParser.inlineText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineText?: (ctx: InlineTextContext) => Result;

	/**
	 * Visit a parse tree produced by `MarkdownParser.blankLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlankLine?: (ctx: BlankLineContext) => Result;
}

