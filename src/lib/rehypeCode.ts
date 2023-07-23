import { visit } from 'unist-util-visit';

export function rehypeCode() {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (node.tagName == 'h1') {
        node.properties.className = 'text-2xl font-bold';
      }
      if (node.tagName == 'p') {
        node.properties.className = 'my-5';
      }
      if (node.tagName == 'a') {
        node.properties.className = 'text-orange-300';
      }
      if (node.tagName == 'code') {
        node.properties.className = 'text-teal-500';
      }
      if (node.tagName === 'pre') {
        node.properties.style =
          node.properties.style +
          ';overflow:auto;padding:1rem;border-radius: 10px;';
      }
    });
  };
}
// 'h' + (Number(node.tagName.charAt(1)) + 1)
