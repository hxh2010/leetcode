const threeSum = require('./index');

describe('三数之和', () => {
  test('常规', () => {
    const ret = threeSum([-1, 0, 1, 2, -1, -4]);
    expect(ret).toEqual([
      [-1, 2, -1],
      [0, 1, -1],
    ]);
  });

  test('全零', () => {
    const ret = threeSum([0, 0, 0]);
    expect(ret).toEqual([[0, 0, 0]]);
  });
});
