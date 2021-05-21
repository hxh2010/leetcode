/**
 * 给定一个包含n 个整数的数组nums和一个目标值target，
 * 判断nums中是否存在四个元素 a，b，c和 d，使得a + b + c + d的值与target相等？找出所有满足条件且不重复的四元组。
 *  注意：
 * 答案中不可以包含重复的四元组。
 * 示例：
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 * 满足要求的四元组集合为：
 * [
 * [-1,  0, 0, 1],
 * [-2, -1, 1, 2],
 * [-2,  0, 0, 2]
 * ]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  const { length } = nums;
  const ret = [];
  nums.sort((a, b) => a - b);

  if (length < 4) {
    return ret;
  }

  for (let i = 0; i < length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      // eslint-disable-next-line no-continue
      continue;
    }

    for (let j = i + 1; j < length - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      let start = j + 1;
      let end = length - 1;
      while (start < end) {
        const sum = nums[i] + nums[j] + nums[start] + nums[end];
        if (sum === target) {
          ret.push([nums[i], nums[j], nums[start], nums[end]]);
          start += 1;
          end -= 1;
          while (start < end && nums[start] === nums[start - 1]) {
            start += 1;
          }
          while (start < end && nums[end] === nums[end + 1]) {
            end -= 1;
          }
        } else if (sum < target) {
          start += 1;
        } else {
          end -= 1;
        }
      }
    }
  }

  return ret;
};
// [-4.-1,-1,0,1,2
const a = fourSum([-1, 0, 1, 2, -1, -4], -1);
console.log(a);
console.log(fourSum([0, 0, 0, 0], 0));
console.log(fourSum([0, 0, 0, 0], -1));
console.log(fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11));
