/**
 * 1个细胞，一个小时分裂一次，生命周期是3小时，求n小时后容器内，有多少细胞。
 * 思路：
 * 细胞的生存周期是3个小时，那我们就可以把细胞在题目中状态分为以下几个状态：
 * a：刚分裂态——由前一小时的a,b,c分裂出
 * b：分裂1小时态——由前一小时a长成
 * c：分裂2小时态——由前一小时b长成
 * d：分裂3小时态——死亡的细胞。由前一小时c长成,和之前的d一起组成。
 * 那么，我们就可以根据细胞状态设定函数。分析每一个状态的来源是哪里即可。
 * 容器中存活的细胞数目就是a、b、c三种状态数量的总和。
 * */
const bfib = function (n) {
  if (n === 0) {
    return 0;
  } // 一个小时之后才会生成
  // eslint-disable-next-line @typescript-eslint/no-use-before-define,no-use-before-define
  return afib(n - 1);
};
const cfib = function (n) {
  if (n === 0 || n === 1) {
    return 0;
  } // 前两小时还没生成
  return bfib(n - 1);
};
const afib = function (n) {
  if (n === 0) {
    return 1;
  } // 初始的那个细胞
  return afib(n - 1) + bfib(n - 1) + cfib(n - 1);
};

const time = 4;
console.log('afib', afib(time));
console.log('bfib', bfib(time));
console.log('cfib', cfib(time));
console.log(afib(time) + bfib(time) + cfib(time));
