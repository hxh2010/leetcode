/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  const ret = new Map();

  if (!root) {
    return [];
  }

  const fn = (value, level = 0) => {
    if (ret.has(level)) {
      const temp = ret.get(level);
      temp.push(value.val);
      ret.set(level, temp);
    } else {
      ret.set(level, [value.val]);
    }
    if (value.left) {
      fn(value.left, level + 1);
    }
    if (value.right) {
      fn(value.right, level + 1);
    }
  };

  fn(root);

  return [...ret.values()];
};

const levelOrder2 = (root) => {
  const ret = [];
  if (!root) {
    return ret;
  }
  const q = [];
  q.push(root);

  while (q.length !== 0) {
    const currentLevelSize = q.length;
    ret.push([]);
    for (let i = 0; i < currentLevelSize; i++) {
      const node = q.shift();
      ret[ret.length - 1].push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }

  return ret;
};
