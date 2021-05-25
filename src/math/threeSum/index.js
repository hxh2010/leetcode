/**
 * 给定一个包含 n 个整数的数组nums，判断nums中是否存在三个元素 a，b，c ，使得a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 满足要求的三元组集合为：
 * [
 *  [-1, 0, 1],
 *  [-1, -1, 2]
 * ]
 * @param {number[]} nums
 * @return {number[][]}
 */

// 排序 + 双指针
const threeSum = function (nums) {
  const result = [];
  let start;
  let end;
  let current;
  nums.sort((a, b) => a - b);
  if (nums[0] > 0 || nums[nums.length - 1] < 0) {
    return result;
  }

  for (let i = 0; i < nums.length; i++) {
    current = nums[i];
    if (current !== nums[i - 1]) {
      start = i + 1;
      end = nums.length - 1;
      while (start < end) {
        if (nums[start] + nums[end] + current === 0) {
          result.push([nums[start], nums[end], current]);
          start += 1;
          end -= 1;
          while (start < end && nums[start] === nums[start - 1]) {
            start += 1;
          }
          while (start < end && nums[end] === nums[end + 1]) {
            end -= 1;
          }
        } else if (nums[start] + nums[end] + current < 0) {
          start += 1;
        } else {
          end -= 1;
        }
      }
    }
  }
  return result;
};

module.exports = threeSum;
