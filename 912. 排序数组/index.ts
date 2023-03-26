/**
 * https://leetcode.cn/problems/sort-an-array/
 */

// 冒泡排序
const bubbleSort = (nums: number[]): number[] => {
  const result = [...nums];

  // 如果数组长度为 n, 那么外层循环只需要执行 n-1 次
  for (let i = 1; i <= result.length - 1; i++) {
    // 如果数组长度为 n, 那么每次比较只要执行到 n-1的位置，
    for (let j = 0; j <= result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        const temp = result[j];

        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
};

// 选择排序
const selectSort = (nums: number[]): number[] => {
  const result = [...nums];

  // 只要拿到倒数第二个就行
  for (let i = 0; i <= result.length - 2; i++) {
    for (let j = i + 1; j <= result.length - 1; j++) {
      if (result[i] > result[j]) {
        const temp = result[i];

        result[i] = result[j];
        result[j] = temp;
      }
    }
  }

  return result;
};

const quickSort = (nums: number[]): number[] => {
  const result = [...nums];
  return result;
};

const sortArray = (nums: number[]): number[] => {
  return bubbleSort(nums);
};

// console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
console.log(selectSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
