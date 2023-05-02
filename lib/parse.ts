import { MarkdownLexer } from "./g4/MarkdownLexer";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import {
  BlockCodeContext,
  BlockContext,
  HeaderContext,
  InlineCodeContext,
  InlineHeaderContext,
  MarkdownContext,
  MarkdownParser,
  TextContentContext,
  TextContext,
} from "./g4/MarkdownParser";
import { MarkdownVisitor } from "./g4/MarkdownVisitor";
import { ParseTreeVisitor, ParseTree } from "antlr4";

export function parse(input: string): MarkdownContext {
  const inputStream = CharStreams.fromString(input);
  const lexer = new MarkdownLexer(inputStream);
  const tokens = new CommonTokenStream(lexer);
  const parser = new MarkdownParser(tokens);
  const tree = parser.markdown();

  const visitor = new HelperVisitor();
  const result = visitor.visit(tree as unknown as ParseTree);

  return result;
}

class HelperVisitor
  extends ParseTreeVisitor<any>
  implements MarkdownVisitor<any>
{
  visitMarkdown(ctx: MarkdownContext) {
    // console.log("visitMarkdown");
    return {
      tag: "markdown",
      body: this.visitChildren(ctx),
    };
  }

  visitBlock(ctx: BlockContext) {
    // console.log("visitBlock", ctx);
    return {
      tag: "block",
      body: this.visitChildren(ctx),
    };
  }

  visitInlineHeader(ctx: InlineHeaderContext) {
    // console.log("visitHeader", ctx);
    return {
      tag: "header",
      attr: {
        level: ctx.header().text.length - 1,
      },
      body: this.visitChildren(ctx.textContent()),
    };
  }

  visitTextContent(ctx: TextContentContext) {
    return {
      tag: "text-content",
      body: this.visitChildren(ctx),
    };
  }

  visitText(ctx: TextContext) {
    // console.log("visitText", ctx);
    return {
      tag: "text",
      content: ctx.text,
    };
  }

  visitInlineCode(ctx: InlineCodeContext) {
    // console.log("visitInlineCode", ctx);
    return {
      tag: "inline-code",
      content: ctx.text,
    };
  }

  visitBlockCode(ctx: BlockCodeContext) {
    // console.log("visitBlockCode", ctx);
    const text = ctx.BLOCK_CODE().text;
    const firstLnIndex = text.indexOf("\n");
    const lang = text.substring(3, firstLnIndex);
    const content = text.substring(firstLnIndex + 1, text.length - 3);
    return {
      tag: "block-code",
      attr: {
        lang,
      },
      content,
    };
  }
}
