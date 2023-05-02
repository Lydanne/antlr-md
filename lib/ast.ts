export abstract class Node<Attr> {
  constructor(
    protected tag: string,
    protected attr?: Attr,
    protected content?: string,
    protected body?: Node<any>[]
  ) {}

  abstract render(): string;
}

export class MarkdownNode extends Node<{}> {
  render() {
    if (!this.body) return "";
    return this.body.map((node) => node.render()).join("\n");
  }
}

export class BlockNode extends Node<{}> {
  render() {
    if (!this.body) return "";
    return this.body
      .map((node) => {
        return `<div class="block">${node.render()}</div>`;
      })
      .join("\n");
  }
}

export class HeaderNode extends Node<{ level: number }> {
  render() {
    if (!this.body) return "";
    return `<h${this.attr?.level} class="header">${this.body
      .map((node) => node.render())
      .join("")}</h${this.attr?.level}>`;
  }
}

export class TextNode extends Node<{}> {
  render() {
    return `<span class="text">${this.content}</span>`;
  }
}

export class InlineCodeNode extends Node<{}> {
  render() {
    return `<span class="inline-code">${this.content}</span>`;
  }
}

export class BlockCodeNode extends Node<{ lang: string }> {
  render() {
    return `<pre class="block-code"><code class="language-${this.attr?.lang}">${this.content}</code></pre>`;
  }
}
