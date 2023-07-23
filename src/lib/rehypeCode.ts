import { visit } from 'unist-util-visit';

export function rehypeCode() {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (node.tagName == 'h1') {
        node.properties.className = 'text-2xl';
      }
      if (node.tagName == 'p') {
        node.properties.className = 'my-5';
      }
    });
  };
}
// 'h' + (Number(node.tagName.charAt(1)) + 1)
