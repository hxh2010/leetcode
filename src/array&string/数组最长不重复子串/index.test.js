const lengthOfLongestSubstring = require('./index');

describe('无重复最长字符串', () => {
  test('常规1', () => {
    const ret = lengthOfLongestSubstring('aaaaaa');
    expect(ret).toEqual(1);
  });

  test('常规2', () => {
    const ret = lengthOfLongestSubstring('abcacdbb');
    expect(ret).toEqual(4);
  });
  test('常规3', () => {
    const ret = lengthOfLongestSubstring('12bsl12');
    expect(ret).toEqual(5);
  });
});
