import { MarkdownLexer } from "./g4/MarkdownLexer";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import {
  BlockContext,
  HeaderContext,
  MarkdownContext,
  MarkdownParser,
} from "./g4/MarkdownParser";
import { MarkdownVisitor } from "./g4/MarkdownVisitor";
import { ParseTreeVisitor, ParseTree } from "antlr4";

export function parseMdAST(input: string): MarkdownContext {
  const inputStream = CharStreams.fromString(input);
  const lexer = new MarkdownLexer(inputStream);
  const tokens = new CommonTokenStream(lexer);
  const parser = new MarkdownParser(tokens);
  const tree = parser.markdown();
  const stack: any[] = [];

  // class HelperListener implements MarkdownListener {
  //   enterEveryRule(ctx: any) {
  //     stack.push(ctx);
  //   }

  //   exitEveryRule(ctx: any) {
  //     console.log(
  //       "stack:",
  //       JSON.stringify(stack.map((item) => item.constructor.name)),
  //       "ctx:",
  //       ctx.constructor.name,
  //       "text:",
  //       ctx.text
  //     );

  //     stack.pop();
  //   }
  // }

  class HelperVisitor
    extends ParseTreeVisitor<any>
    implements MarkdownVisitor<any>
  {
    // visitMarkdown(ctx: MarkdownContext) {
    //   console.log("visitMarkdown", ctx.text);

    //   return {
    //     tag: "markdown",
    //     text: ctx.text,
    //     body: this.visitChildren(ctx),
    //   };
    // }

    visitBlock(ctx: BlockContext) {
      console.log("visitBlock", ctx.text);
      return {
        tag: "block",
        text: ctx.text,
        body: this.visitChildren(ctx),
      };
    }

    visitHeader(ctx: any) {
      console.log("visitHeader", ctx.text);
      return {
        tag: "header",
        text: ctx.text,
        body: this.visitChildren(ctx),
      };
    }

    visitHeaderFlag(ctx: any) {
      console.log("visitHeaderFlag", ctx.text);
      return {
        tag: "headerFlag",
        text: ctx.text,
        body: this.visitChildren(ctx),
      };
    }

    // visitUnorderedList(ctx: any) {
    //   console.log("visitUnorderedList", ctx.text);
    //   return "visitUnorderedList." + this.visitChildren(ctx);
    // }

    // visitOrderedList(ctx: any) {
    //   console.log("visitOrderedList", ctx.text);
    //   return "visitOrderedList." + this.visitChildren(ctx);
    // }

    visitTextLine(ctx: any) {
      console.log(
        "visitTextLine",
        ctx.text,
        ctx.parentCtx instanceof HeaderContext
      );
      if (ctx.parentCtx instanceof HeaderContext) {
        return this.visitHeader(ctx.parentCtx as HeaderContext);
      }
      return {
        tag: "textLine",
        text: ctx.text,
        body: this.visitChildren(ctx),
      };
    }

    visitInlineText(ctx: any) {
      console.log("visitInlineText", ctx.text);

      return {
        tag: "inlineText",
        text: ctx.text,
        body: this.visitChildren(ctx),
      };
    }

    // visitBlankLine(ctx: any) {
    //   console.log("visitBlankLine", ctx.text);
    //   return {
    //     tag: "blankLine",
    //     text: ctx.text,
    //     body: this.visitChildren(ctx),
    //   };
    // }
  }

  const visitor = new HelperVisitor();
  const result = visitor.visit(tree as unknown as ParseTree);

  console.log("result", JSON.stringify(result, null, 2));

  return tree;
}
