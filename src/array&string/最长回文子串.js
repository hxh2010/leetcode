/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }
  const len = s.length;
  let res = '';
  const begin = 0;
  // 创建二维数组
  const dp = Array.from(new Array(len), () => new Array(len).fill(false));
  // 从字符串首部开始
  for (let i = 0; i < len; i++) {
    // 从字符串i前开始依次向前查找
    for (let j = i; j >= 0; j--) {
      console.log(j);
      dp[j][i] = s[i] === s[j] && (i - j < 2 || dp[j + 1][i - 1]);
      if (dp[j][i] && i - j + 1 > res.length) {
        res = s.substring(j, i + 1);
      }
    }
  }
  console.log(dp);
  return res;
};

console.log(longestPalindrome('badad'));
