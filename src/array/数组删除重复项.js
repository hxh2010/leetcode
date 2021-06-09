/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * @param {number[]} nums
 * @return {number}
 */
// 双指针
const removeDuplicates = (nums) => {
  let left = 0;
  for (let right = 1; right < nums.length; right++) {
    // 如果左指针和右指针指向的值一样，说明有重复的，
    // 这个时候，左指针不动，右指针继续往右移。如果他俩
    // 指向的值不一样就把右指针指向的值往前挪
    if (nums[left] !== nums[right]) {
      left += 1;
      nums[left] = nums[right];
    }
  }
  return left + 1;
};

console.log(removeDuplicates([1, 1, 2]));
