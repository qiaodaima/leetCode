const data = [
  { name: 'foo', age: 16, city: 'shanghai' },
  { name: 'bar', age: 24, city: 'hangzhou' },
  { name: 'fiz', age: 22, city: 'shanghai' },
  { name: 'baz', age: 19, city: 'hanzghou' },
  { name: 'bae', age: 23, city: 'hangzhou' },
];

class _Array {
  private data: unknown[] = [];

  constructor(initArray: unknown[] = []) {
    this.data = initArray;
  }

  // 类似 filter
  where = (handle: (item: unknown) => Boolean): _Array => {
    const result: unknown[] = [];

    for (const item of this.data) {
      if (handle(item)) {
        result.push(item);
      }
    }

    this.data = result;

    return this;
  };

  // 类似 sort
  order = (key: string): _Array => {
    // @ts-ignore
    this.data.sort((a: unknown, b: unknown) => a[key] - b[key]);

    return this;
  };

  // 根据key的值对数据元素进行分组
  groupBy = (key: string): _Array => {
    const map = new Map();
    const result: unknown[] = [];

    for (const item of this.data) {
      // @ts-ignore
      const groupKey = item[key];

      // 存在这个分组
      if (map.has(groupKey)) {
        const temp = map.get(groupKey);

        temp.push(item);
        map.set(groupKey, temp);
      } else {
        // 不存在这个分组
        map.set(groupKey, [item]);
      }
    }

    for (const [keys, values] of map) {
      result.push(values);
    }

    this.data = result;

    return this;
  };

  execute = () => {
    return this.data;
  };
}

const query = (initArray: unknown[]) => new _Array(initArray);

const result = query(data)
  // @ts-ignore
  .where((item) => item.age > 18)
  .groupBy('city')
  .execute();

console.log(result);
