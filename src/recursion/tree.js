function sonsTree(t, list) {
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
}

function treeUtils(list) {
  const ptree = [];
  const map = new Map();
  list.forEach((d) => {
    map.set(d.id, d);
  });
  list.forEach((d) => {
    if (!map.has(d.pid)) ptree.push(sonsTree(d, list));
  });
  console.info(ptree);
  return ptree;
}

const trees = treeUtils([]);
console.log(trees);
