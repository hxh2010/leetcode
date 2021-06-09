/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * @param {number[]} nums
 * @return {{val, left: undefined, right: undefined}}
 */
const sortedArrayToBST = function (nums) {
  const buildBST = (ns, start, end) => {
    if (start > end) {
      // 构成不了区间
      return null;
    }
    const minIndex = Math.floor((start + end) / 2);
    const root = {
      val: ns[minIndex],
      left: undefined,
      right: undefined,
    };

    root.left = buildBST(ns, start, minIndex - 1); // 构建左子树
    root.right = buildBST(ns, minIndex + 1, end); // 构建左子树
    return root;
  };

  return buildBST(nums, 0, nums.length - 1); // 递归的入口
};
