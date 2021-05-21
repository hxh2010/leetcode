const twoSum = require('./index');

describe('两数之和', () => {
  test('常规', () => {
    const ret = twoSum([2, 3, 4, 5, 6, 7, 8], 15);
    expect(ret).toEqual([5, 6]);
  });
});
