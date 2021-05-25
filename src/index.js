/**
 * 基本递归:（1+...+n）
 * 需求：求和
 * 循环体：sum(n) = sum(n-1) + n;
 * 跳出条件：n =1;
 */
function sum(n) {
  if (n === 1) return 1;
  return sum(n - 1) + n;
}

console.log('--------------------sum------------------');
console.log('sum：', sum(100));

/**
 * 斐波那契数列 (1,1,2,3,5....)
 * 需求：求数列第n项
 * 循环体：f(n)=f(n-1)+f(n-2)
 * 跳出条件：n=0或者n=1
 */
function fibonacci(n) {
  if (n === 0 || n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('--------------------fibonacci------------------');
console.log('fibonacci：', fibonacci(6));

/**
 * 求幂(n*n*n*n m次)
 * 需求：n的m次方
 * 循环体：f(n,m)=f(n,m-1)*n
 * 跳出条件：n=1
 */
function power(n, m) {
  if (m === 1) return n;
  return power(n, m - 1) * n;
}
console.log('--------------------power------------------');
console.log('power：', power(2, 4));

/**
 *  数列 1,1,2,4,7,11,16...求第 n 项,求前n项和
 * 分析
 * 假设已知函数 foo(n) 为第n项
 * 递归关系
 * 从第 0 项开始计算**
 * 第 0 项, 1 => foo(0) + 0 = foo(1)
 * 第 1 项, 2 => foo(1) + 1 = foo(2)
 * 第 2 项, 3 => foo(2) + 2 = foo(3)
 * ...
 * 第 n-1 项, n => foo(n-1) + n-1 = foo(n)
 * foo(n) = foo(n-1) + n-1;
 */
function foo(n) {
  if (n === 0) return 1;
  return foo(n - 1) + n - 1;
}

function sumFoo(n) {
  return foo(n + 1);
}
console.log('--------------------sumFoo------------------');
console.log('sumFoo：', sumFoo(5));

/**
 * 一共10级楼梯，每次可以走一步或两步，求一共多少种走法。
 * 思路：
 * 要想走到N(N=10)级,可以分为2种情况。
 * 从n-2级迈两步
 * 从n-1级迈一步
 * 那么对于n-2和n-1的情况也是各自分为两种，以此类推。
 * 那么走法的和就是n-2的走法和n-1的走法之和。
 * 那么递归到最基本的（当前人在第0阶台阶）
 * 第0阶台阶：0
 * 第1阶台阶：1
 * 第2阶台阶：2（1+1或者2）
 * 得到公式，也就是斐波那契数列。
 * */
var fib = function (n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  if (n > 2) {
    return fib(n - 1) + fib(n - 2);
  }
};

console.log('--------------------fib------------------');

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

var afib = function (n) {
  if (n === 0) {
    return 1;
  } // 初始的那个细胞
  return afib(n - 1) + bfib(n - 1) + cfib(n - 1);
};
var bfib = function (n) {
  if (n === 0) {
    return 0;
  } // 一个小时之后才会生成
  return afib(n - 1);
};
var cfib = function (n) {
  if (n === 0 || n === 1) {
    return 0;
  } // 前两小时还没生成
  return bfib(n - 1);
};

var time = 4;
console.log(afib(time) + bfib(time) + cfib(time));

console.log('--------------------fib------------------');

/**
 * 深度克隆
 */

function deepClone(obj) {
  const objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === 'object') {
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
}

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

var data = [];

console.log('--------------------fib------------------');
function sonsTree(obj, data) {
  var children = [];
  data.forEach((d) => {
    if (d.pid === obj.id) {
      // pid等于加入数组
      sonsTree(d, data); // 递归出子元素
      children.push(d);
    }
  });
  obj.children = children;
  return obj;
}

function treeUtils(data) {
  const ptree = [];
  const map = new Map();
  data.forEach((d) => {
    map.set(d.id, d);
  });
  data.forEach((d) => {
    if (!map.has(d.pid)) ptree.push(sonsTree(d, data));
  });
  console.info(ptree);
  return ptree;
}

var trees = treeUtils(data);
console.log(JSON.stringify(trees));
