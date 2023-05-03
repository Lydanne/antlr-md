// @ts-nocheck
// Generated from ./lib/g4/Markdown.g4 by ANTLR 4.12.0

import {ParseTreeVisitor} from 'antlr4';


import { MarkdownContext } from "./MarkdownParser";
import { BlockContext } from "./MarkdownParser";
import { InlineHeaderContext } from "./MarkdownParser";
import { HeaderContext } from "./MarkdownParser";
import { InlineTextContext } from "./MarkdownParser";
import { TextContentContext } from "./MarkdownParser";
import { BlockCodeContext } from "./MarkdownParser";
import { StrContext } from "./MarkdownParser";
import { InlineCodeContext } from "./MarkdownParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MarkdownParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class MarkdownVisitor<Result> extends ParseTreeVisitor<Result> {
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
	 * Visit a parse tree produced by `MarkdownParser.inlineHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineHeader?: (ctx: InlineHeaderContext) => Result;
	/**
	 * Visit a parse tree produced by `MarkdownParser.header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeader?: (ctx: HeaderContext) => Result;
	/**
	 * Visit a parse tree produced by `MarkdownParser.inlineText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineText?: (ctx: InlineTextContext) => Result;
	/**
	 * Visit a parse tree produced by `MarkdownParser.textContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTextContent?: (ctx: TextContentContext) => Result;
	/**
	 * Visit a parse tree produced by `MarkdownParser.blockCode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockCode?: (ctx: BlockCodeContext) => Result;
	/**
	 * Visit a parse tree produced by `MarkdownParser.str`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStr?: (ctx: StrContext) => Result;
	/**
	 * Visit a parse tree produced by `MarkdownParser.inlineCode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineCode?: (ctx: InlineCodeContext) => Result;
}

