/**
 * 不管是防抖还是节流，都是采用闭包来实现
 * 因为其内部需要有一些标识性的变量要存储，但是又不能污染全局，
 * 所以只能是在内部再定义一个函数
 */

/**
 * 防抖
 *
 * 在预定时间后触发函数，如果在预定时间内再次触发，则重新计时
 * 如果一直触发，则有可能永远都不执行
 *
 * 比如希望 input 输入框输入后的100ms后发生搜索，那么只要你一直输入不停，
 * 那么这个搜索永远不会触发，除非你停下来了
 */
const debounce = (f, fps) => {
  let isFirstRun = true;
  let timer: number = 0;

  return (...arguments) => {
    if (isFirstRun) {
      isFirstRun = false;
      f(...arguments);

      return;
    }

    clearTimeout(timer);
    timer = setTimeout(f, fps, ...arguments);
  };
};

/**
 * 节流
 *
 * 节流是来源于防抖优化，保证在预定时间内，函数至少会执行一次
 *
 * 比如希望 input 输入框输入后的100ms后发生搜索，那么只要你一直输入不停，
 * 那么这个搜索框会间隔 100ms就触发一次，简单点说节流是起到稀释的作用
 */
const throttle = (f, fps) => {
  let isFirstRun = true;
  let timer: number = 0;
  let timeFlag = Date.now();

  return (...arguments) => {
    if (isFirstRun) {
      isFirstRun = false;
      f(...arguments);

      return;
    }

    clearTimeout(timer);

    // 超过了预设时间
    if (Date.now() - timeFlag > fps) {
      timeFlag = Date.now();
      f(...arguments);

      return;
    }

    timer = setTimeout(f, fps, ...arguments);
  };
};
