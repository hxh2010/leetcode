/**
 * 快速排序
 * @param arr
 * @returns {*}
 */
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};

/**
 * 冒泡
 * @param arr
 * @returns {*}
 */
const bubbleSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let pos = 0;
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 相邻元素两两对比
        const temp = arr[j + 1]; // 元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
        pos = j;
      }
    }
    console.log(`第${i}次排序：交换位置${pos}:${arr.join(',')}`);
  }
  return arr;
};

/**
 * 插入
 * @param arr
 * @returns {*}
 */
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
    console.log(`---${arr.join(',')}`);
  }
  return arr;
};

const arr = [3, 44, 38, 5, 47, 15, 36];
console.log(insertionSort(arr));
