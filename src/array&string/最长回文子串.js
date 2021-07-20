/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * @param {string} s
 * @return {string}
 */
// dp
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

// 中心拓展法
var longestPalindrome2 = function (s) {
  if (s.length < 2) {
    return s;
  }

  let res = '';
  const len = s.length;

  function helper(m, n) {
    console.log('1', m, n);
    while (m >= 0 && n < len && s[m] === s[n]) {
      m -= 1;
      n += 1;
    }

    // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
    // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
    if (n - m - 1 > res.length) {
      // slice也要取[m+1,n-1]这个区间
      res = s.slice(m + 1, n);
    }
    // console.log('2', m, n, res);
  }

  for (let i = 0; i < s.length; i++) {
    // 回文子串长度是奇数
    helper(i, i);
    // 回文子串长度是偶数
    helper(i, i + 1);
  }
  return res;
};

console.log(longestPalindrome2('badad'));
