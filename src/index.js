console.log('hello leetcode');

var a = [
  {
    id: 1,
  },
  {
    id: 2,
    children: [
      {
        id: 3,
      },
      {
        id: 4,
        children: [
          {
            id: 5,
          },
        ],
      },
    ],
  },
];

function tree(arr) {
  arr.forEach((d) => {
    d.count = 0;
    if (d.children) {
      d.count = d.children.length;
      tree(d.children);
    }
  });
}

var b = [
  { id: 1, count: 0 },
  {
    id: 2,
    children: [
      { id: 3, count: 0 },
      { id: 4, children: [{ id: 5, count: 0 }], count: 1 },
    ],
    count: 2,
  },
];

tree(a);
console.log(JSON.stringify(a));
