/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function (n) {
  if (n <= 0) return false;
  if (n === 1) return true;

  const fn = (m) => {
    if (m === 1) return true;
    const x = m % 3;
    if (x === 0) return fn(m / 3);
    return false;
  };
  return fn(n);
};

const isPowerOfThree2 = function (n) {
  return n > 0 && (n === 1 || (n % 3 === 0 && isPowerOfThree(n / 3)));
};

const isPowerOfThree3 = function (n) {
  const x = Math.log10(n);
  const y = Math.log10(3);
  console.log(x, y, x / y);
  return (x / y) % 1 === 0;
};

console.log(isPowerOfThree(27));
