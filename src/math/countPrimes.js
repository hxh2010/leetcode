/**
 * 统计所有小于非负整数 n 的质数的数量。
 * 输入：n = 10
 * 输出：4
 * 解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrime = (x) => {
    for (let j = 2; j * j <= x; ++j) {
      if (x % j === 0) {
        return false;
      }
    }
    return true;
  };

  let ans = 0;
  for (let i = 2; i < n; ++i) {
    ans += isPrime(i);
  }
  return ans;
};

var countPrimes1 = function (n) {
  const isPrime = new Array(n).fill(1);
  let ans = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      ans += 1;
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = 0;
      }
    }
  }
  console.log(isPrime);
  return ans;
};

var countPrimes2 = function (n) {
  const isPrime = new Array(n).fill(1);
  const primes = [];
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
    for (let j = 0; j < primes.length && i * primes[j] < n; j++) {
      isPrime[i * primes[j]] = 0;
      if (i % primes[j] === 0) {
        break;
      }
    }
  }
  console.log(isPrime);
  return primes.length;
};

console.log(countPrimes(10));
