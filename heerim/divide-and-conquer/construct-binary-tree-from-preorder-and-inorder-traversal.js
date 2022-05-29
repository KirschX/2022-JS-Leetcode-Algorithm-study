/**
 * preorder에서 알 수 있는것
 * -> preorder[0]은 root
 *
 * inorder에서 알 수 있는것
 * -> root를 중심으로 왼쪽: left subtree, 오른쪽: right subtree!
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function makeBT(preorder, inorder, preorderRootIdx, inorderLeft, inorderRight) {
  if (preorderRootIdx >= inorder.length || inorderLeft > inorderRight) return null;

  const root = new TreeNode(preorder[preorderRootIdx]);
  let inorderRootIdx = 0;
  for (let i = inorderLeft; i <= inorderRight; i++) {
    if (inorder[i] == root.val) {
      inorderRootIdx = i;
      break;
    }
  }
  root.left = makeBT(preorder, inorder, preorderRootIdx + 1, inorderLeft, inorderRootIdx - 1);
  root.right = makeBT(preorder, inorder, preorderRootIdx + inorderRootIdx - inorderLeft + 1, inorderRootIdx + 1, inorderRight);

  return root;
}

var buildTree = function (preorder, inorder) {
  return makeBT(preorder, inorder, 0, 0, inorder.length - 1);
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
