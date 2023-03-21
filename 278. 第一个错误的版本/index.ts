/**
 * https://leetcode.cn/problems/first-bad-version/
 */

const solution = (isBadVersion: any) => {
  return function (n: number): number {
    let l = 1;
    let r = n;

    while (l <= r) {
      const m = parseInt(`${(l + r) / 2}`, 10);

      if (isBadVersion(m)) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }

    return l;
  };
};
