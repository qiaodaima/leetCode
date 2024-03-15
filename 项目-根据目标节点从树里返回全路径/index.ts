/**
 * 场景：在一些树形组件回显的时候，我们需要给出选中节点的全路径
 * 但是一般后端只有给我们目标节点 id,因此需要前端自己计算目标节点全路径
 */

type TreeNode = {
  id: number;
  children: TreeNode[];
};

type GetPathFromTree = (tree: TreeNode[], target: number) => number[] | undefined;

const getPathFromTree: GetPathFromTree = (tree, target) => {
  for (const currentNode of tree) {
    if (currentNode.id === target) {
      return [currentNode.id];
    }

    if (Array.isArray(currentNode.children)) {
      const pathInChild = getPathFromTree(currentNode.children, target);

      if (pathInChild) {
        return [currentNode.id, ...pathInChild];
      }
    }
  }

  return undefined;
};

const fakeData: TreeNode[] = [
  {
    id: 1,
    children: [
      {
        id: 2,
        children: [],
      },
      {
        id: 3,
        children: [
          {
            id: 4,
            children: [],
          },
          {
            id: 5,
            children: [
              {
                id: 6,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    children: [
      {
        id: 8,
        children: [],
      },
      {
        id: 9,
        children: [
          {
            id: 10,
            children: [],
          },
        ],
      },
    ],
  },
];

console.log(getPathFromTree(fakeData, 11));
