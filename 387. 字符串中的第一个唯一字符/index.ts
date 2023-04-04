/**
 * https://leetcode.cn/problems/first-unique-character-in-a-string/
 */
const firstUniqChar = (s: string): number => {
  const map: Map<string, number> = new Map();
  let target = '';

  for (const item of s) {
    // 这个字符已经存在
    if (map.has(item)) {
      const value = map.get(item)!;

      map.set(item, value + 1);
    } else {
      map.set(item, 1);
    }
  }

  for (const [key, count] of map) {
    if (count === 1) {
      target = key;
      break;
    }
  }

  return s.split('').indexOf(target);
};

console.log(firstUniqChar('leetcode'));
