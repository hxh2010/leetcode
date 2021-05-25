/**
 * 给定一个整数数组 nums和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 示例:
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * @param {number[]} nums
 * @return {number[]}
 */

// 利用 map hash 表
const twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const key = target - nums[i];
    if (map.has(key)) {
      return [map.get(key), i];
    }
    map.set(nums[i], i);
  }
};

module.exports = twoSum;
