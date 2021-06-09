function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply({}, args);
    }
    return (...args2) => {
      return curried.apply({}, args.concat(args2));
    };
  };
}

const add = (a, b, c) => {
  return a + b + c;
};

const computed = curry(add);
console.log(computed(1, 2)(3));
console.log(computed(1)(2)(3));
console.log(computed(1, 2, 3));
console.log(computed(1)(2, 3));

function curryAdd(func) {
  let argArr = [];
  return function temp(...args) {
    if (!args.length) {
      const result = func.apply({}, argArr);
      argArr = [];
      return result;
    }
    argArr = argArr.concat(args);
    return temp;
  };
}

function addAll(...args) {
  return args.reduce((a, b) => a + b);
}
const curryAddAll = curryAdd(addAll);
const curryAddAll2 = curryAdd(add);
console.log(curryAddAll2(1, 2, 19)(11)());
console.log(curryAddAll(1)(2)(3)(4, 5, 5)());
console.log(curryAddAll(1)(2)(3)(4, 5, 5, 1)());
console.log(curryAddAll(1)(2)(3)(4, 5, 5, 1, 2, 3)(1)());

// 反柯里化
function uncurry(fn) {
  // eslint-disable-next-line prefer-rest-params
  let args = [].slice.call(arguments, 1);
  return function () {
    // eslint-disable-next-line prefer-rest-params
    const arg = [].slice.call(arguments);
    args = args.concat(arg);
    return fn.apply(this, args);
  };
}
