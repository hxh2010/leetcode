/**
 * A(n, m) 不考虑顺序，12 和 21 算两个
 * A(n, m) = n*(n-1)*(n-2)...*(n-m+1) = n!/(n-m)!
 * C(n, m) 考虑顺序，12 和 21 算1个，所以要除去重复出现的
 * C(n, m) = A(n, m) / m! = n!/((n-m)!*m!)
 * @param arr 原始数组
 * @param m 需要取的元素个数
 * @returns {*[]} 返回所有组合
 */
function anm(arr, m) {
  let c = 0;
  const r = [];
  (function fn(s, num) {
    console.log(s);
    for (let i = 0; i < arr.length; i++) {
      if (s.length === num - 1) {
        if (!s.includes(arr[i])) {
          c += 1;
          r.push([...s, arr[i]]);
        }
      } else if (s.indexOf(arr[i]) < 0) {
        fn([...s, arr[i]], num);
      }
    }
  })([], m);
  console.log('总共：', c);
  return r;
}
const ret = anm([1, 2, 3, 4], 3);

console.log(ret);
console.log('----------------------------------------');

/**
 * 全排列（递归链接）算法 n改为数组长度则为全排列
 * 1、设定源数组为输入数组，结果数组存放排列结果（初始化为空数组）；
 * 2、逐一将源数组的每个元素链接到结果数组中（生成新数组对象）；
 * 3、从原数组中删除被链接的元素（生成新数组对象）；
 * 4、将新的源数组和结果数组作为参数递归调用步骤2、3，直到源数组为空，则输出一个排列。
 * @param arr 原始数组
 * @param m 需要取的元素个数
 * @returns {*[]} 返回所有组合
 */
function anm2(arr, m) {
  const all = [];
  (function fn(source, result) {
    if (result.length === m) {
      all.push(result.concat());
    } else {
      for (let i = 0; i < source.length; i++) {
        // let a = source.concat(); a.splice(i,1);
        const a = [...source.slice(0, i), ...source.slice(i + 1)];
        const d = result.concat(source[i]);
        console.log(a, '-', d);
        fn(a, d);
      }
    }
  })(arr, []);
  return all;
}

// console.log(anm2([1, 2, 3, 4], 3));
