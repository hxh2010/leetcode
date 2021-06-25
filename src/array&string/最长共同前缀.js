/**
 * 最长共同前缀
 * @param strs
 * @returns {string|*}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }

  if (strs.length === 1) {
    return strs[0];
  }

  const { length } = strs;
  let temp = strs[0];
  if (temp === '') {
    return '';
  }
  temp = temp.split('');
  const ret = [];

  for (let i = 0; i < temp.length; i++) {
    const t = temp[i];
    for (let j = 0; j < length; j++) {
      if (strs[j].length < i || strs[j][i] !== t) {
        return ret.join('');
      }
    }
    ret.push(t);
  }

  return ret.join('');
};

console.log(longestCommonPrefix(['aa', 'aa']));
