/**
 * https://leetcode.cn/problems/merge-strings-alternately/
 */

const mergeAlternately = (word1: string, word2: string): string => {
  const result: string[] = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 <= word1.length - 1 || p2 <= word2.length - 1) {
    if (word1[p1] !== undefined) {
      result.push(word1[p1]);
      p1++;
    }

    if (word2[p2] !== undefined) {
      result.push(word2[p2]);
      p2++;
    }
  }

  return result.join('');
};

console.log(mergeAlternately('abc', 'pqr'));
console.log(mergeAlternately('ab', 'pqrs'));
