import { describe, expect, it } from "vitest";
import { parse } from "./parse";
import { readFileSync } from "fs";
import { join } from "path";
import { render } from "./render";

describe('render.ts', () => {
  it('should render html', () => {
    const tree = parse(
      readFileSync(join(__filename, "../", "readme.md"), "utf-8")
    );
    expect(render(tree)).toMatchFileSnapshot("./__snapshots__/render.md.snap");
  });
});