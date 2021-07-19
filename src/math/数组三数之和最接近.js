/**
 * 给定一个数组以及目标值，返回三数之和与目标值最接近的三位数的和
 * @param nums
 * @param target
 * @returns {any}
 */
var threeSum = function (nums, target) {
  let ret = Infinity;
  const map = new Map();
  nums.sort((a, b) => a - b);

  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      let s = i + 1;
      let e = nums.length - 1;
      while (e > s) {
        const t = nums[s] + nums[e] + nums[i];
        const a = Math.abs(target - t);
        map.set(a, t);
        if (s !== i && e !== i && t === target) {
          return t;
        }
        if (t > target) {
          ret = Math.min(a, ret);
          e -= 1;
        } else {
          ret = Math.min(a, ret);
          s += 1;
        }
      }
    }
  }

  return map.get(ret);
};
