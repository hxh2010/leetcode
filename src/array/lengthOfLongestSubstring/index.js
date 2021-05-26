/**
 * 给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。
 * 示例1:
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 示例 2:
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 示例 3:
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const arr = s.split('');
  const map = new Map();
  let start = 0;
  let ret = 0;

  for (let end = 0; end < arr.length; end++) {
    if (map.has(arr[end])) {
      start = Math.max(start, map.get(arr[end]));
    }
    ret = Math.max(ret, end - start + 1);
    map.set(arr[end], end + 1);
  }

  return ret;
};

lengthOfLongestSubstring(' ');

const lengthOfLongestSubstring2 = (s) => {
  let ret = 0;
  const res = [];
  for (let i = 0; i < s.length; i++) {
    while (res.includes(s[i])) {
      res.shift();
    }
    res.push(s[i]);

    ret = Math.max(ret, res.length);
  }
  return ret;
};

module.exports = lengthOfLongestSubstring;
