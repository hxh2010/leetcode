var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 44, 86];

function ser(arr, key, _low = 0, _high = arr.length) {
  console.log(arr);
  if (_low > _high) {
    return -1;
  }
  var mid = parseInt((_high + _low) / 2);
  if (arr[mid] === key) {
    return mid;
  }
  if (arr[mid] > key) {
    _high = mid - 1;
    return ser(arr, key, _low, _high);
  }
  if (arr[mid] < key) {
    _low = mid + 1;
    return ser(arr, key, _low, _high);
  }
}

var b = ser(arr, 1);
console.log(b);

var str = 'abc';
