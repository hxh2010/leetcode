const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 44, 86];

/**
 * 二分查找
 * @param arr
 * @param key
 * @param low
 * @param high
 * @returns number
 */
const search = (arr, key, low = 0, high = arr.length) => {
  if (low > high) {
    return -1;
  }
  const mid = Math.ceil((high + low) / 2);
  if (arr[mid] === key) {
    return mid;
  }
  if (arr[mid] > key) {
    high = mid - 1;
    return search(arr, key, low, high);
  }
  if (arr[mid] < key) {
    low = mid + 1;
    return search(arr, key, low, high);
  }
};

// console.log(search(list, 1))

const search2 = (arr, key) => {
  const len = arr.length;
  let low = 0;
  let high = len - 1;

  while (low <= high) {
    const mid = Math.ceil((high + low) / 2);
    if (arr[mid] === key) {
      return mid;
    }
    if (arr[mid] > key) {
      high = mid - 1;
    } else if (arr[mid] < key) {
      low = mid + 1;
    }
  }
};

console.log(search2(list, 6));
