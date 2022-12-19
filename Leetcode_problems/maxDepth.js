/*Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number
 of nodes along the longest path from the root node down
 
 to the farthest leaf node. */

/*Time complexity  O(n)*/

function countDepth(node) {
  if (node === null) {
    return 0;
  }

  let depthL = 1;
  let depthR = 1;

  if (node.left) {
    depthL += countDepth(node.left);
  }

  if (node.right) {
    depthR += countDepth(node.right);
  }

  return depthL > depthR ? depthL : depthR;
}

var maxDepth = function (root) {
  return countDepth(root);
};
