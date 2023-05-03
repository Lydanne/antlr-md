import { describe, expect, it } from "vitest";
import { parse } from "./parse";
import { readFileSync } from "fs";
import { join } from "path";
import { render } from "./render";

describe("md-parser", () => {
  it("should parse markdown", () => {
    const tree = parse(
      readFileSync(join(__filename, "../", "readme.md"), "utf-8")
    );
    expect(tree).toMatchFileSnapshot("./__snapshots__/parse.md.snap");
  });

  it("should parse str", () => {
    const tree = parse(`# 你好今天\n\n\n\n好呀好呀\n\n`);
    expect(tree).toMatchFileSnapshot("./__snapshots__/parse-str.md.snap");
    expect(render(tree)).toMatchFileSnapshot("./__snapshots__/render.md.snap");
  });
});
