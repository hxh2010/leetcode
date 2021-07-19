/**
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点(i, ai) 。
 * 在坐标内画 n 条垂直线，垂直线 i的两个端点分别为(i,ai) 和 (i, 0) 。
 * 找出其中的两条线，使得它们与x轴共同构成的容器可以容纳最多的水。
 * 说明：你不能倾斜容器。
 *
 * 题解：双指针，头尾指针，移动较小的那个
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let s = 0;
  let e = height.length - 1;
  let ret = 0;
  while (e > s) {
    const t = Math.min(height[s], height[e]) * (e - s);
    ret = Math.max(ret, t);
    if (height[s] > height[e]) {
      e -= 1;
    } else {
      s += 1;
    }
  }

  return ret;
};
