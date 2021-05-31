function curry(func) {
  console.log('-----', func.length);
  return function curried(...args) {
    if (args.length >= func.length) {
      // eslint-disable-next-line prefer-spread
      return func.apply(null, args);
    }
    return function (args2) {
      // eslint-disable-next-line prefer-spread
      return curried.apply(null, args.concat(args2));
    };
  };
}

const temp = (a, b, c) => {
  // return args.reduce((a, b) => {
  //   if (typeof b === 'function') {
  //     return b() + a;
  //   }
  //   return b + a;
  // }, 0);
  // return args.reduce((a, b) => a + b);
  return a + b + c;
};

const computed = curry(temp);

const mul = (num) => -1 * num;

const add = (num) => num;

// const a = computed(2, 5)(4);
// console.log(a);

const cs =
  (f, args1 = []) =>
  (...args2) => {
    const args = [...args1, ...args2];
    return f.length === args.length ? f(...args) : cs(f, args);
  };

function curry5(func) {
  let argArr = [];
  // eslint-disable-next-line no-shadow
  return function temp(...args) {
    if (!args.length) {
      // eslint-disable-next-line prefer-spread
      const result = func.apply(null, argArr);
      argArr = []; // 保证下次调用
      return result;
    }
    argArr = argArr.concat(args);
    return temp;
  };
}

function add5(...args) {
  return args.reduce((a, b) => a + b);
}
const ca = curry5(add5);
const ca2 = curry(add5);
console.log(ca(1)(2)(3)(4, 5, 5)());
