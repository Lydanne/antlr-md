import { describe, expect, it } from "vitest";
import { parse } from "./parse";
import { readFileSync } from "fs";
import { join } from "path";
import { render } from "./render";
import { BlockNode } from ".";

describe("render.ts", () => {
  it("should standard render", () => {
    const tree = parse(
      readFileSync(join(__dirname, "__test__", "eg-1.md"), "utf-8")
    );
    tree.body?.push(new BlockNode([]));
    expect(render(tree)).toMatchFileSnapshot(
      "./__snapshots__/eg-1.md.render.snap"
    );
  });
});
