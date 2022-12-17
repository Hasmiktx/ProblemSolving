/* Wrong   Code */

let checkNode = function (node) {
  if (!node) return 0;
  let left = 1 + checkNode(node.left);
  let right = 1 + checkNode(node.right);
  if (Math.abs(left - right) <= 1) {
    return true;
  } else {
    return false;
  }
};
var isBalanced = function (root) {
  return checkNode(root);
};
