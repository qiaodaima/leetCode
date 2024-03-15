/**
 * 场景：在一些树形组件中，选中的节点数据格式往往是节点的全路径，
 * 有时候哦我们需要获取目标节点的一些数据，因此需要根据节点全路径进行搜索目标节点
 */

type TreeNode = {
  id: number;
  children: TreeNode[];
};

type GetTargetNodeByTreePath = (tree: TreeNode[], path: number[]) => TreeNode | undefined;

const getTargetNodeByTreePath: GetTargetNodeByTreePath = (tree, path) => {
  const [currentNodePath, ...childrenNodePath] = path;
  const currentNode = tree.find((currentNode) => currentNode.id === currentNodePath);

  // 头节点路径没办法从树里面找到
  if (!!currentNode === false) {
    return undefined;
  }

  // 头结点虽然找到，并且没有后续路径，说明已经查找结束
  if (childrenNodePath.length === 0) {
    return currentNode;
  }

  // 有后续路径，但是当前节点没有子节点，说明已经查找结束
  // 没有子节点的判断依据就是子节点是不是数组即可，空数组也不要紧，会再次递归一次，最终也还是找不到
  // 没有对空数组进行阻断是为了保持代码逻辑一致性
  if (Array.isArray(currentNode!.children) === false) {
    return undefined;
  }

  return getTargetNodeByTreePath(currentNode!.children, childrenNodePath);
};
