/**
 * https://leetcode.cn/problems/sparse-array-search-lcci/
 */

const findString = (words: string[], s: string): number => {
  let left = 0;
  let right = words.length - 1;

  while (left <= right) {
    let middle = parseInt(`${(left + right) / 2}`);
    let middleCopy = middle;

    // 中间指针是空字符
    if (words[middle] === '') {
      // 遇到不是空字符才停止移动
      while (words[middle] === '') {
        // 中间指针往右边移动
        middle++;

        // 移动到右边界区间则停止移动
        if (middle > right) {
          break;
        }
      }
    }

    // 判断是不是极端情况，
    // 即中间指针的右边都是空字符，是的话，则直接更新搜索区间，进行下一轮循环
    if (middle > right) {
      right = middleCopy - 1;
      continue;
    }

    if (s === words[middle]) {
      return middle;
    }

    if (s < words[middle]) {
      right = middle - 1;
    }

    if (s > words[middle]) {
      left = middle + 1;
    }
  }

  return -1;
};

console.log(findString(['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''], 'ta'));
