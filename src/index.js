/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  if (!board.length || !words.length) {
    return [];
  }
  // 构建字典树
  const trie = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const word of words) {
    let node = trie;
    // eslint-disable-next-line no-restricted-syntax
    for (const ch of word) {
      if (!node[ch]) {
        node[ch] = {};
      }
      node = node[ch];
    }
    node.is_end = word;
  }
  const results = new Set();
  const m = board.length;
  const n = board[0].length;

  // 多源搜索
  const isVisited = Symbol('visited');

  // 回溯搜索
  function _findWords(x, y, visited, node) {
    if (node.is_end) {
      // eat, eate, 不可中断，区别于79
      results.add(node.is_end);
    }
    if (x < 0 || x >= n || y < 0 || y >= m) {
      return false;
    }
    const char = visited[y][x];
    if (char === isVisited || !node[char]) {
      return false;
    }
    visited[y][x] = isVisited;
    _findWords(x - 1, y, visited, node[char]);
    _findWords(x, y - 1, visited, node[char]);
    _findWords(x + 1, y, visited, node[char]);
    _findWords(x, y + 1, visited, node[char]);
    visited[y][x] = char;
  }

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (trie[board[y][x]]) {
        _findWords(x, y, board, trie);
      }
    }
  }
  return [...results];
};

var permute = function (nums) {
  const ret = [];
  const len = nums.length;

  function fn(arr) {
    for (let i = 0; i < len; i++) {
      if (arr.length === len - 1) {
        if (!arr.includes(nums[i])) {
          ret.push([...arr, nums[i]]);
        }
      } else if (arr.indexOf(nums[i]) < 0) {
        fn([...arr, nums[i]]);
      }
    }
  }

  fn([]);

  return ret;
};

var permute2 = (nums) => {
  const res = [];
  const path = [];
  const k = nums.length;

  function backtracking(used = []) {
    console.log(used);
    if (path.length === k) {
      res.push(Array.from(path));
      return;
    }
    for (let i = 0; i < k; i++) {
      console.log('111', [...used], i, k);
      if (!used[i]) {
        path.push(nums[i]);
        used[i] = true; // 同支
        backtracking(used);
        path.pop();
        used[i] = false;
      }
    }
  }

  backtracking();
  return res;
};

console.log(permute2([1, 2, 3]));
