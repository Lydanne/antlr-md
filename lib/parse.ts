import MarkdownLexer from "./g4/MarkdownLexer";
import MarkdownParser, {
  BlockCodeContext,
  BlockContext,
  InlineCodeContext,
  InlineHeaderContext,
  InlineTextContext,
  MarkdownContext,
  TextContext,
} from "./g4/MarkdownParser";
import MarkdownVisitor from "./g4/MarkdownVisitor";
import {
  ParseTreeVisitor,
  ParseTree,
  CharStreams,
  CommonTokenStream,
} from "antlr4";
import {
  BlockCodeNode,
  BlockNode,
  InlineCodeNode,
  InlineHeaderNode,
  InlineTextNode,
  MarkdownNode,
  TextNode,
} from "./ast";

export function parse(input: string): MarkdownNode {
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
    return new MarkdownNode({}, this.visitChildren(ctx));
  }

  visitBlock(ctx: BlockContext) {
    // console.log("visitBlock", ctx);
    return new BlockNode(this.visitChildren(ctx));
  }

  visitInlineHeader(ctx: InlineHeaderContext) {
    // console.log("visitHeader", ctx);
    return new InlineHeaderNode(
      {
        level: ctx.HEADER().getText().length - 1,
      },
      this.visitChildren(ctx.textContent())
    );
  }

  visitInlineText(ctx: InlineTextContext) {
    return new InlineTextNode(this.visitChildren(ctx.textContent()));
  }

  visitText(ctx: TextContext) {
    // console.log("visitText", ctx);
    return new TextNode(ctx.getText());
  }

  visitInlineCode(ctx: InlineCodeContext) {
    // console.log("visitInlineCode", ctx);
    const text = ctx.getText();
    return new InlineCodeNode(text.substring(1, text.length - 1));
  }

  visitBlockCode(ctx: BlockCodeContext) {
    // console.log("visitBlockCode", ctx);
    const text = ctx.BLOCK_CODE().getText();
    const firstLnIndex = text.indexOf("\n");
    const lang = text.substring(3, firstLnIndex);
    const content = text.substring(firstLnIndex + 1, text.length - 3);
    return new BlockCodeNode(
      {
        lang,
      },
      content
    );
  }
}
