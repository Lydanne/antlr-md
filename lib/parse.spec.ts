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

  it("should standard ast2", () => {
    const tree = parse("\n```\nxxxffsfs```\n\n\nfb\n");

    expect(tree).toMatchInlineSnapshot(`
      MarkdownNode {
        "attr": {},
        "body": [
          BlockNode {
            "attr": {},
            "body": [
              BlockCodeNode {
                "attr": {
                  "lang": "",
                },
                "body": undefined,
                "content": "xxxffsfs",
                "tag": "block-code",
              },
            ],
            "content": undefined,
            "tag": "block",
          },
          BlockNode {
            "attr": {},
            "body": [],
            "content": undefined,
            "tag": "block",
          },
          BlockNode {
            "attr": {},
            "body": [],
            "content": undefined,
            "tag": "block",
          },
          BlockNode {
            "attr": {},
            "body": [
              InlineTextNode {
                "attr": {},
                "body": [
                  TextNode {
                    "attr": {},
                    "body": undefined,
                    "content": "fb",
                    "tag": "text",
                  },
                ],
                "content": undefined,
                "tag": "inline-text",
              },
            ],
            "content": undefined,
            "tag": "block",
          },
          BlockNode {
            "attr": {},
            "body": [],
            "content": undefined,
            "tag": "block",
          },
        ],
        "content": undefined,
        "tag": "markdown",
      }
    `);
  });
});
