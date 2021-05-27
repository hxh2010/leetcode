/**
 * 罗马数字包含以下七种字符:I， V， X， L，C，D 和 M。
 * 字符      数值
 * I        1
 * V        5
 * X        10
 * L        50
 * C        100
 * D        500
 * M        1000
 * @param {string} s
 * @return {number}
 */
var romanToInt = (s) => {
  const obj = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let res = 0;
  for (let i = 0; i < s.length; ) {
    // 先截取两个字符，如果这两个字符存在于map中，就表示他们是一个整体。否则就截取一个
    if (i + 1 < s.length && obj.hasOwnProperty(s.substring(i, i + 2))) {
      res += obj[s.substring(i, i + 2)];
      i += 2;
    } else {
      res += obj[s.substring(i, i + 1)];
      i += 1;
    }
  }
  return res;
};
