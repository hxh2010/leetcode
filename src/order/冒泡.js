/**
 * 冒泡排序
 * 步骤：
 *  比较相邻的元素。如果第一个比第二个大，就交换他们两个。
 *  对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
 *  针对所有的元素重复以上的步骤，除了最后一个。
 *  持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
 *  时间复杂度为：O( n^2 )
 *
 *
 *
 *
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
