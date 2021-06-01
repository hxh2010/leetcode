console.log('hello leetcode');

const a = [
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

tree(a);
console.log(JSON.stringify(a));
