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
const twoSum = (nums, target) => {
  let j = 1;
  let i = 0;
  const maxArea = nums.length - 1;
  while (nums[i] + nums[j] !== target) {
    if (j === maxArea) {
      i += 1;
      j = i;
    }
    j += 1;
  }
  return [i, j];
};

const twoSum2 = (nums, target) => {
  const { length } = nums;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

const twoSum3 = (nums, target) => {
  const map = new Map();

  for (let idx = 0; idx < nums.length; idx++) {
    const diff = target - nums[idx];

    if (map.has(diff)) {
      return [map.get(diff), +idx];
    }

    map.set(nums[idx], +idx);
  }

  return [];
};

module.exports = twoSum;
