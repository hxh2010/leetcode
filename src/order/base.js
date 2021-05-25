/**
 * 冒泡
 * @param arr
 * @returns {*}
 */
function bubbleSort(arr) {
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
}

/**
 * 插入
 * @param arr
 * @returns {*}
 */
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var key = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
    console.log(`a;dfkj${arr.join(',')}`);
  }
  return arr;
}

var arr = [3, 44, 38, 5, 47, 15, 36];
console.log(insertionSort(arr));
