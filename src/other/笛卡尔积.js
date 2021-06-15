/**
 * 笛卡尔积
 * @param array
 * @returns {*|*[]|(function(*, *): *[])}
 */
const calcDescartes = (...array) => {
  if (array.length < 2) return array[0] || [];
  const ret = array.reduce((col, set) => {
    const res = [];
    col.forEach((c) => {
      set.forEach((s) => {
        const t = [].concat(Array.isArray(c) ? c : [c]);
        t.push(s);
        res.push(t);
      });
    });
    return res;
  });
  console.log(ret);
  return ret;
};
calcDescartes([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
