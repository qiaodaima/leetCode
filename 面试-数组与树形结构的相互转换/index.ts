const tree1 = [
  {
    id: 1,
    name: 'text1',
    parentId: 1,
    children: [
      {
        id: 2,
        name: 'text2',
        parentId: 1,
        children: [
          {
            id: 4,
            name: 'text4',
            parentId: 2,
          },
        ],
      },
      {
        id: 3,
        name: 'text3',
        parentId: 1,
      },
    ],
  },
];

const tree2 = [
  {
    id: 1,
    name: '部门1',
    pid: 0,
    children: [
      {
        id: 2,
        name: '部门1-1',
        pid: 1,
        children: [
          {
            id: 4,
            name: '部门1-1-1',
            pid: 2,
            children: [],
          },
        ],
      },
      {
        id: 3,
        name: '部门1-2',
        pid: 1,
        children: [
          {
            id: 5,
            name: '部门1-2-1',
            pid: 3,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: '部门2',
    pid: 0,
    children: [
      {
        id: 7,
        name: '部门2-1',
        pid: 6,
        children: [],
      },
    ],
  },
  {
    id: 8,
    name: '部门3',
    pid: 0,
    children: [],
  },
];

const getArrayByTree = (arr: any[]) => {
  const result: any[] = [];

  const f = (arr: any) => {
    for (const { children, ...other } of arr) {
      result.push({ ...other });

      if (children?.length) {
        f(children);
      }
    }
  };

  f(arr);

  return result;
};

console.log(getArrayByTree(tree1));
console.log(getArrayByTree(tree2));
