import { visit } from 'unist-util-visit';

export function rehypeCode() {
  return (tree: any) => {
    visit(tree, 'element', (node) => {
      if (node.tagName == 'h1') {
        node.properties.className = 'text-2xl font-medium';
        node.properties.style = 'margin:1rem 0;';
      }
      if (node.tagName == 'h2') {
        node.properties.className = 'text-xl font-normal';
        node.properties.style = 'margin:1rem 0;';
      }
      if (node.tagName == 'h4') {
        node.properties.className = 'text-lg font-normal';
        node.properties.style = 'margin:0.5rem 0;';
      }
      if (node.tagName == 'p') {
        node.properties.className = 'my-5';
      }
      if (node.tagName == 'a') {
        node.properties.className = 'text-orange-300';
      }
      if (node.tagName == 'code') {
        node.properties.style = 'color: rgb(190 24 93);';
      }
      if (node.tagName === 'pre') {
        node.properties.style =
          node.properties.style +
          ';overflow:auto;padding:1rem;border-radius: 10px;';
      }
      if (node.tagName === 'ol') {
        node.properties.style = 'list-style:auto;    margin-left:2rem;';
      }
    });
  };
}
// 'h' + (Number(node.tagName.charAt(1)) + 1)
