/**
 * https://leetcode.cn/problems/merge-sorted-array/
 */

const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
  // 因为数组下标是从0开始，先让2个指针分别指向2个数组的末尾
  let p1 = m - 1;
  let p2 = n - 1;
  let currIndex = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] >= nums2[p2]) {
      nums1[currIndex] = nums1[p1];
      currIndex--;
      p1--;
    }

    if (nums1[p1] < nums2[p2]) {
      nums1[currIndex] = nums2[p2];
      currIndex--;
      p2--;
    }
  }

  if (p1 < 0) {
    while (p2 >= 0) {
      nums1[currIndex] = nums2[p2];
      currIndex--;
      p2--;
    }
  }

  if (p2 < 0) {
    while (p1 >= 0) {
      nums1[currIndex] = nums1[p1];
      currIndex--;
      p1--;
    }
  }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
