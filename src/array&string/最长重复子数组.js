/**
 * 给两个整数数组A和B，返回两个数组中公共的、长度最长的子数组的长度。
 * 示例：
 *
 * 输入：
 * A: [1,2,3,2,1]
 * B: [3,2,1,4,7]
 * 输出：3
 * 解释：
 * 长度最长的公共子数组是 [3, 2, 1] 。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let ret = 0;
  const temp = '';
  let begin = 0;
  const m = nums1.length;
  const n = nums2.length;
  const arr = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    const a = nums1[i - 1];
    for (let j = 1; j <= n; j++) {
      const b = nums2[j - 1];
      if (a === b) {
        arr[i][j] = arr[i - 1][j - 1] + 1;
      }

      ret = Math.max(ret, arr[i][j]);

      if (arr[i][j] === ret) {
        begin = i - ret;
      }
    }
  }
  console.log(arr);

  console.log(nums1.slice(begin, begin + ret));

  return ret;
};

findLength('add', 'aadda');
