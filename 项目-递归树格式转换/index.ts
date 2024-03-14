/**
 * 场景：在项目开发中，我们的树的数据格式可能和一些组件需要的数据格式不一样，
 * 因此需要把数据格式转换一下
 *
 */

type Original = {
  title: string;
  id: string;
  child: Original[];
};

type Target = {
  label: string;
  value: string;
  children: Target[];
};

const transform = (from: Original[]): Target[] => {
  const result: Target[] = [];

  for (const { title, id, child } of from) {
    result.push({
      label: title,
      value: id,
      children: Array.isArray(child) ? transform(child) : [],
    });
  }

  return result;
};
