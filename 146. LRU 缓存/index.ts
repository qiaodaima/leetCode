/**
 * https://leetcode.cn/problems/lru-cache/
 */
class LRUCache {
  private cache; // 缓存池
  private capacity; // 最大缓存容量

  constructor(capacity: number) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key: number): number {
    // 首先判断是否存在，不存在返回-1
    // 存在的话，则直接提升到头部位置
    if (this.cache.has(key) === false) {
      return -1;
    }

    const result = this.cache.get(key);

    this.cache.delete(key);
    this.cache.set(key, result);

    return result;
  }

  put(key: number, value: number): void {
    // 如果存在，则直接提升到头部
    if (this.cache.has(key)) {
      this.cache.delete(key);
      this.cache.set(key, value);
      return;
    }

    // 如果不存在，则直接头部追加
    this.cache.set(key, value);

    // 超过最大容量则从头部删除一个
    if (this.cache.size > this.capacity) {
      const head = this.cache.keys().next().value;
      this.cache.delete(head);
    }
  }
}

const c = new LRUCache(10);
