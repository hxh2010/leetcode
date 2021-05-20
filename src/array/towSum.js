/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
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

var twoSum2 = function (nums, target) {
  const { length } = nums;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

var twoSum3 = function (nums, target) {
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
