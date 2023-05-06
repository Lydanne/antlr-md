import { describe, expect, it } from "vitest";
import { parse } from "./parse";
import { readFileSync } from "fs";
import { join } from "path";

describe("parse", () => {
  it("should standard ast", () => {
    const tree = parse(
      readFileSync(join(__dirname, "__test__", "eg-1.md"), "utf-8")
    );

    expect(tree).toMatchFileSnapshot("./__snapshots__/eg-1.md.parse.snap");
  });
});
