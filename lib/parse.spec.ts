import { describe, expect, it } from "vitest";
import { parseMdAST } from "./parse";
import { readFileSync } from "fs";
import { join } from "path";

describe("md-parser", () => {
  it("should parse markdown", () => {
    const tree = parseMdAST(
      readFileSync(join(__filename, "../", "readme.md"), "utf-8")
    );
    console.log(tree.toStringTree());
    expect(tree.toString()).toMatchInlineSnapshot('"[]"');
  });
});