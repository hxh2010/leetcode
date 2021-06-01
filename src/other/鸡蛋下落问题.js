/**
 * @param {number} kk
 * @param {number} nn
 * @return {number}
 */
const superEggDrop = (kk, nn) => {
  const dp = Array(kk + 1)
    .fill(0)
    .map(() => new Array(nn + 1).fill(0));
  console.log(dp);

  for (let n = 1; n <= nn; n++) {
    for (let k = 1; k <= kk; k++) {
      /**
       * dp(k,n)=1+ 1≤x≤n min (max(dp(k−1,x−1),dp(k,n−x)))
       *二分法   碎了  k-1 n-1 ->下面的     没碎 k n -1  -> 上面的
       * k-1个鸡蛋j-1次测的楼层 +  i个鸡蛋j-1次测的楼层  + 1
       */
      dp[k][n] = 1 + dp[k - 1][n - 1] + dp[k][n - 1];

      if (dp[k][n] >= nn) {
        console.log(dp[k][n], kk, nn);
        return n;
      }
    }
  }
  return nn;
};

superEggDrop(2, 6);
