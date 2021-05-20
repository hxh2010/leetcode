const strStr = (str) => {
  const ret = [];
  const arr = str.toString().split('');
  const { length } = arr;
  let i = 0;

  while (i < length) {
    let num = 1;
    const t = arr[i];
    for (let j = i + 1; j < length; j++) {
      if (t === arr[j]) {
        num += 1;
      } else {
        break;
      }
    }
    ret.push(num);
    ret.push(t);
    i += num;
  }

  return ret.join('');
};

/**
 * 给定一个正整数 n ，输出外观数列的第 n 项。
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 第一项是数字 1
 * 描述前一项，这个数是 1 即 “ 一 个 1 ”，记作 "11"
 * 描述前一项，这个数是 11 即 “ 二 个 1 ” ，记作 "21"
 * 描述前一项，这个数是 21 即 “ 一 个 2 + 一 个 1 ” ，记作 "1211"
 * 描述前一项，这个数是 1211 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "111221"
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  if (n === 1) {
    return '1';
  }
  return strStr(countAndSay(n - 1));
};

var longestCommonPrefix = function (strs) {
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
