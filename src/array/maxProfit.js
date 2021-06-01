/**
 * 给定一个数组 prices ，其中prices[i] 是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * @param {number[]} prices
 * @return {number}
 */
// 贪心算法
const maxProfit = (prices) => {
  if (prices.length === 0) {
    return 0;
  }
  let max = 0;
  prices.forEach((d, i) => {
    const e = prices[i + 1];
    if (d < e) {
      max = max + e - d;
    }
  });
  return max;
};
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit2 = (prices) => {
  const list = [];
  let t = [];
  for (let i = 0; i < prices.length; i++) {
    t = [];
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        t.push(prices[j] - prices[i]);
      }
    }
    if (t.length) {
      list.push(Math.max(...t));
    }
  }
  return list.length ? Math.max(...list) : 0;
};

const maxProfit3 = (prices) => {
  if (prices == null || prices.length === 0) {
    return 0;
  }
  let maxPro = 0; // 记录最大利润
  let min = prices[0]; // 记录数组中访问过的最小值
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    maxPro = Math.max(prices[i] - min, maxPro);
  }
  return maxPro;
};

console.log(maxProfit2([1, 2]));
