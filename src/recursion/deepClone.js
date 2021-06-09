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

/**
 * 完整深拷贝
 *  JSON.parse(JSON.stringify)实现一个深拷贝，以及这种方法的缺点
 *  Javascript基本数据类型
 *  复杂类型中各个类型的拷贝方法
 *  循环引用爆栈的问题
 *
 * @param target
 * @param cache
 * @returns {{}|any}
 */
function deepCloneAll(target, cache = new Map()) {
  if (cache.get(target)) {
    return cache.get(target);
  }
  if (target instanceof Object) {
    let dist;
    if (target instanceof Array) {
      // 拷贝数组
      dist = [];
    } else if (target instanceof Function) {
      // 拷贝函数
      dist = function () {
        // eslint-disable-next-line prefer-rest-params
        return target.call(this, ...arguments);
      };
    } else if (target instanceof RegExp) {
      // 拷贝正则表达式
      dist = new RegExp(target.source, target.flags);
    } else if (target instanceof Date) {
      dist = new Date(target);
    } else {
      // 拷贝普通对象
      dist = {};
    }
    // 将属性和拷贝后的值作为一个map
    cache.set(target, dist);
    // eslint-disable-next-line no-restricted-syntax
    for (const key in target) {
      // 过滤掉原型身上的属性
      if (target.hasOwnProperty(key)) {
        dist[key] = deepClone(target[key], cache);
      }
    }
    return dist;
  }
  return target;
}
