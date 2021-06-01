/**
 * 验证是否搜索二叉树
 *   节点的左子树只包含小于当前节点的数。
 *   节点的右子树只包含大于当前节点的数。
 *   所有左子树和右子树自身必须也是二叉搜索树。
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = (root) => {
  const isValidBST1 = (value, minVal, maxVal) => {
    if (value == null) return true;
    // 每个节点如果超过这个范围，直接返回false
    if (value.val >= maxVal || value.val <= minVal) return false;
    // 这里再分别以左右两个子节点分别判断，
    // 左子树范围的最小值是minVal，最大值是当前节点的值，也就是root的值，因为左子树的值要比当前节点小
    // 右子数范围的最大值是maxVal，最小值是当前节点的值，也就是root的值，因为右子树的值要比当前节点大
    return (
      isValidBST1(value.left, minVal, value.val) &&
      isValidBST1(value.right, value.val, maxVal)
    );
  };

  return isValidBST1(root, -Infinity, Infinity);
};

// 前序
const isValidBST2 = (root) => {
  if (root) {
    return [root.val, ...isValidBST2(root.left), ...isValidBST2(root.right)];
  }
  return [];
};

// 中序
const isValidBST3 = (root) => {
  if (root) {
    return [...isValidBST3(root.left), root.val, ...isValidBST3(root.right)];
  }
  return [null];
};

// 后序
const isValidBST4 = (root) => {
  if (root) {
    return [...isValidBST4(root.left), ...isValidBST4(root.right), root.val];
  }
  return [];
};

console.log(
  isValidBST3({
    val: 4,
    left: {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    },
    right: {
      val: 6,
      left: {
        val: 5,
        left: null,
        right: null,
      },
      right: {
        val: 7,
        left: null,
        right: null,
      },
    },
  }),
);

const isSymmetric = function (root) {
  const center = (value) => {
    if (value) {
      return [...center(value.left), value.val, ...center(value.right)];
    }
    return [];
  };

  const fn = (arr) => {
    const { length } = arr;
    if (length % 2 === 0) {
      return false;
    }
    let a = 0;
    let b = length - 1;
    while (a !== b) {
      if (arr[a] !== arr[b]) {
        return false;
      }
      a += 1;
      b -= 1;
    }
    return true;
  };

  const t = center(root);
  console.log(t);
  console.log(fn([2, 2, 2, 1, null, 2, 2]));

  return fn(t);
};

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

console.log(
  levelOrder({
    val: 1,
    left: {
      val: 2,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
  }),
);
