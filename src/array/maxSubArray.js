/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = nums[0];
  let cur;
  let max = pre;
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], pre + nums[i]);
    max = Math.max(cur, max);
    pre = cur;
  }
  return max;
};
