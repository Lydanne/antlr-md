// @ts-nocheck
// Generated from ./lib/g4/Markdown.g4 by ANTLR 4.12.0

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `MarkdownParser`.
 */
export default class MarkdownListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by `MarkdownParser.inlineHeader`.
	 * @param ctx the parse tree
	 */
	enterInlineHeader?: (ctx: InlineHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `MarkdownParser.inlineHeader`.
	 * @param ctx the parse tree
	 */
	exitInlineHeader?: (ctx: InlineHeaderContext) => void;
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
	 * Enter a parse tree produced by `MarkdownParser.textContent`.
	 * @param ctx the parse tree
	 */
	enterTextContent?: (ctx: TextContentContext) => void;
	/**
	 * Exit a parse tree produced by `MarkdownParser.textContent`.
	 * @param ctx the parse tree
	 */
	exitTextContent?: (ctx: TextContentContext) => void;
	/**
	 * Enter a parse tree produced by `MarkdownParser.blockCode`.
	 * @param ctx the parse tree
	 */
	enterBlockCode?: (ctx: BlockCodeContext) => void;
	/**
	 * Exit a parse tree produced by `MarkdownParser.blockCode`.
	 * @param ctx the parse tree
	 */
	exitBlockCode?: (ctx: BlockCodeContext) => void;
	/**
	 * Enter a parse tree produced by `MarkdownParser.str`.
	 * @param ctx the parse tree
	 */
	enterStr?: (ctx: StrContext) => void;
	/**
	 * Exit a parse tree produced by `MarkdownParser.str`.
	 * @param ctx the parse tree
	 */
	exitStr?: (ctx: StrContext) => void;
	/**
	 * Enter a parse tree produced by `MarkdownParser.inlineCode`.
	 * @param ctx the parse tree
	 */
	enterInlineCode?: (ctx: InlineCodeContext) => void;
	/**
	 * Exit a parse tree produced by `MarkdownParser.inlineCode`.
	 * @param ctx the parse tree
	 */
	exitInlineCode?: (ctx: InlineCodeContext) => void;
}

