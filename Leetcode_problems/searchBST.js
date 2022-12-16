/* You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. 
If such a node does not exist, return null. */

/* This solution don't pass test,but I can't  find problem*/
let searchBSTNonRecursive = function (root, val) {
  while (root) {
    if (root.val === val) {
      return root;
    } else if (root.val > val) {
      root = root.left;
    } else if (root.val < val) {
      root = root.right;
    }

    return null;
  }
};

/* Recursive Solution    Time complexity O(log n)*/

let searchBST = function (root, val) {
  if (!root || root.val === val) {
    return root;
  } else {
    if (root.val > val) {
      return searchBST(root.left, val);
    } else if (root.val < val) {
      return searchBST(root.right, val);
    }
  }
};
