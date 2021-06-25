/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = (s) => {
  const t = s.replace(/[^0-9a-zA-Z]/g, '');
  const t1 = t.split('').map((d) => d.toLowerCase());
  const t2 = [...t1].reverse();
  console.log(t1, t2);
  return t1.join('') === t2.join('');
};

var isPalindrome2 = (s) => {
  const t = s.replace(/[^0-9a-zA-Z]/g, '');
  const arr = t.split('').map((d) => d.toLowerCase());
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
};

console.log(isPalindrome2('race a car'));
