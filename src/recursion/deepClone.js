/**
 * 深度克隆
 */
const deepClone = (obj) => {
  const objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === 'object') {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        // 判断ojb子元素是否为对象，如果是，递归复制
        if (obj[key] && typeof obj[key] === 'object') {
          objClone[key] = deepClone(obj[key]);
        } else {
          // 如果不是，简单复制
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
};

console.log('--------------------fib------------------');
const obj = {
  a: '123',
  b: {
    c: 1,
    d: {
      e: 123,
    },
  },
};

const objClone = deepClone(obj);

objClone.b.c = 2;

console.log(obj);
console.log(objClone);
