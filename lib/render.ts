import { Node } from "./ast";

export function render(ast: Node<{}>) {
  return ast.render();
}
