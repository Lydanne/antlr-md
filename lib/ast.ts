export abstract class Node<Attr> {
  tag!: string;
  body?: Node<any>[];
  constructor(public attr?: Attr, public content?: string, body?: Node<any>[]) {
    if (body) this.body = body.filter((n) => n);
  }

  abstract render(): string;
}

export class MarkdownNode extends Node<{}> {
  tag: string = "markdown";

  constructor(attr: {}, body: Node<any>[]) {
    super(attr, undefined, body);
  }

  render() {
    if (!this.body) return "";
    return this.body
      .filter((node) => node?.render)
      .map((node) => node.render())
      .join("\n");
  }
}

export class BlockNode extends Node<{}> {
  tag: string = "block";

  constructor(body: Node<any>[]) {
    super({}, undefined, body);
  }

  render() {
    if (!this.body) return "";
    return `<div class="block">${this.body
      .map((node) => node.render())
      .join("\n")}</div>`;
  }
}

export class InlineHeaderNode extends Node<{ level: number }> {
  tag: string = "inline-header";

  constructor(attr: { level: number }, body: Node<any>[]) {
    super(attr, undefined, body);
  }

  render() {
    if (!this.body) return "";
    return `<h${
      this.attr?.level
    } class="inline-header"><span class="inline-header-flag">${"#".repeat(
      this.attr?.level ?? 0
    )}&#32;</span>${this.body.map((node) => node.render()).join("")}</h${
      this.attr?.level
    }>`;
  }
}

export class InlineTextNode extends Node<{}> {
  tag: string = "inline-text";

  constructor(body: Node<any>[]) {
    super({}, undefined, body);
  }

  render() {
    return `<span class="inline-text">${this.body
      ?.map((node) => node.render())
      .join("")}</span>`;
  }
}

export class StrNode extends Node<{}> {
  tag: string = "str";

  constructor(content: string) {
    super({}, content);
  }

  render() {
    return `<span class="str">${this.content}</span>`;
  }
}

export class InlineCodeNode extends Node<{}> {
  tag: string = "inline-code";

  constructor(content: string) {
    super({}, content);
  }

  render() {
    return `<span class="inline-code"><span class="inline-code-flag">\`</span>${this.content}<span class="inline-code-flag">\`</span></span>`;
  }
}

export class BlockCodeNode extends Node<{ lang: string }> {
  tag: string = "block-code";

  constructor(attr: { lang: string }, content: string) {
    super(attr, content);
  }

  render() {
    return `<pre class="block-code"><span class="block-code-flag">\`\`\`</span><code class="language-${this.attr?.lang}">${this.content}</code><span class="block-code-flag">\`\`\`</span></pre>`;
  }
}
