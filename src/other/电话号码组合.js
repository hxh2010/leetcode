/**
 * 给定一个仅包含数字2-9的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 给出数字到字母的映射如下（与电话按键相同）。
 * 注意 1 不对应任何字母。
 * 输入：digits = "23"
 * 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  const arr = digits.split('').map((d) => {
    const n = parseInt(d, 10);
    return map[n];
  });

  const ret = arr.reduce((a, b) => {
    const r = [];
    a.forEach((aa) => {
      b.forEach((bb) => {
        r.push([...aa, bb]);
      });
    });

    return r;
  });

  return ret.map((d) => {
    if (Array.isArray(d)) {
      return d.join('');
    }
    return d;
  });
};

letterCombinations('2');
