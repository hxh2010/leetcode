const sonsTree = (t, list) => {
  const children = [];
  list.forEach((d) => {
    if (d.pid === t.id) {
      // pid等于加入数组
      sonsTree(d, list); // 递归出子元素
      children.push(d);
    }
  });
  t.children = children;
  return t;
};

const treeUtils = (list) => {
  const pTree = [];
  const map = new Map();
  list.forEach((d) => {
    map.set(d.id, d);
  });
  list.forEach((d) => {
    if (!map.has(d.pid)) pTree.push(sonsTree(d, list));
  });
  return pTree;
};

const trees1 = treeUtils([]);

const treeUtils2 = (list) => {
  const map = {};
  const ret = [];

  list.forEach((d) => {
    map[d.id] = { ...d, children: [] };
  });

  list.forEach((d) => {
    const { id } = d;
    const { pid } = d;

    if (pid === 0) {
      ret.push(map[id]);
    } else {
      if (!map[pid]) {
        map[pid] = {
          children: [],
        };
      }
      map[pid].children.push(map[id]);
    }
  });

  return ret;
};

const treeUtils3 = (list) => {
  const map = {};
  const ret = [];

  list.forEach((d) => {
    const { id } = d;
    const { pid } = d;
    const t = {
      children: [],
    };
    if (!map[id]) {
      map[id] = t;
    }

    map[id] = {
      ...d,
      children: map[id].children,
    };

    if (pid === 0) {
      ret.push(map[id]);
    } else {
      if (!map[pid]) {
        map[pid] = {
          children: [],
        };
      }
      map[pid].children.push(map[id]);
    }
  });

  return ret;
};

const trees2 = treeUtils2([
  { id: 1, pid: 0, name: 11 },
  { id: 2, pid: 1, name: 12 },
  { id: 3, pid: 2, name: 13 },
  { id: 4, pid: 2, name: 14 },
  { id: 5, pid: 3, name: 15 },
  { id: 6, pid: 1, name: 16 },
]);

console.dir(trees2);
