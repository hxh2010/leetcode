/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = (nums) => {
  const n = nums.length;

  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return nums[0];
  }

  const states = [];
  states.push(nums[0]);
  states.push(Math.max(nums[0], nums[1]));

  for (let i = 2; i < n; i++) {
    states.push(Math.max(states[i - 1], states[i - 2] + nums[i]));
  }
  console.log(states);

  return states[n - 1];
};

var rob2 = (nums) => {
  const n = nums.length;

  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return nums[0];
  }
  if (n === 2) {
    return Math.max(nums[0], nums[1]);
  }

  let a = nums[0];
  let b = Math.max(nums[0], nums[1]);
  let r = Math.max(b, a + nums[2]);

  for (let i = 3; i < n; i++) {
    a = b;
    b = r;
    r = Math.max(b, a + nums[i]);
  }

  return r;
};

var rob3 = (nums) => {
  const n = nums.length;

  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return nums[0];
  }

  let a = nums[0];
  let b = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    const temp = b;
    b = Math.max(b, a + nums[i]);
    a = temp;
  }

  return b;
};

var test = [1, 2, 3, 1];
console.log(rob(test));
console.log(rob2(test));
console.log(rob3(test));
