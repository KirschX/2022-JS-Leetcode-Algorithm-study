/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 * Definition for a binary tree node.
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function makeBST(nums, left, right) {
  if (left > right) return null;
  const mid = parseInt((left + right) / 2);
  const root = new TreeNode(nums[mid]);
  root.left = makeBST(nums, left, mid - 1);
  root.right = makeBST(nums, mid + 1, right);
  return root;
}

var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;

  const mid = parseInt(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  root.left = makeBST(nums, 0, mid - 1);
  root.right = makeBST(nums, mid + 1, nums.length - 1);

  return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
