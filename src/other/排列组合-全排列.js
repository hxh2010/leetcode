/**
 * 全排列（递归链接）算法 n改为数组长度则为全排列
 * 1、设定源数组为输入数组，结果数组存放排列结果（初始化为空数组）；
 * 2、逐一将源数组的每个元素链接到结果数组中（生成新数组对象）；
 * 3、从原数组中删除被链接的元素（生成新数组对象）；
 * 4、将新的源数组和结果数组作为参数递归调用步骤2、3，直到源数组为空，则输出一个排列。
 */

// 只能全排列
var anm = (nums) => {
  const res = [];
  const path = [];
  const k = nums.length;

  function backtracking(used = []) {
    console.log([...used]);
    if (path.length === k) {
      res.push(Array.from(path));
      console.log('push', [...path]);
      return;
    }
    for (let i = 0; i < k; i++) {
      console.log('111', [...used], i);
      if (!used[i]) {
        path.push(nums[i]);
        used[i] = true; // 同支
        backtracking(used);
        path.pop();
        used[i] = false;
      }
    }
  }

  backtracking();
  return res;
};

// 可根据第二个参数排列对应数量
const anm2 = (arr, m) => {
  const all = [];
  const list = [];
  const set = new Set();

  (function fn(source, result) {
    if (result.length === m) {
      all.push(result.concat());
      console.log('push', [...result]);
      const t = [...result].join('/');
      if (!set.has(t)) {
        set.add(t);
        list.push([...result]);
      }
    } else {
      for (let i = 0; i < source.length; i++) {
        // const a = [...source.slice(0, i), ...source.slice(i + 1)];  // 两种写法一样
        const a = source.filter((d, di) => di !== i);
        const d = result.concat(source[i]);
        console.log(a, '-', d);
        fn(a, d);
        console.log('------');
      }
    }
  })(arr, []);
  console.log('list', list);
  return all;
};

// console.log(anm([1, 2, 3]));
console.log(anm2([1, 1, 3], 3));
