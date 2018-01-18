
/**
 * 阶乘
 * 添加缓存 add cache map
 * 采用递归要注意尾调用优化，而且不方便添加缓存，故用循环实现
 * To use recursion should pay attention to the tail call optimization, and it is not convenient to add cache, so it is implemented in a loop
 */
const factorialWithCache = (function () {
  const cache = {};
  return (n) => {
    if (n <= 0) { throw new Error('factorial s argv should be greater than 0'); }
    if (cache[n]) { return cache[n]; }
    if (n === 1) { return 1; }
    let total = 1;
    for (let i = 1; i <= n; i++) {
      while (cache[i]) {
        total = cache[i];
        i++;
      }
      cache[i] = total *= i;
    }
    return total;
  }
})();

/**
 * 阶乘
 * 无缓存，采用递归 no cache, use recursion
 * recursion version, tail call optimization
 * @param {*} n 
 */
const factorial = (n, total = 1) => {
  if (n <= 0) { throw new Error('factorial s argv should be greater than 0'); }
  if (n === 1) {
    return total;
  }
  return factorial(n - 1, n * total);
}

const baseCombinations = factorial => (n, k) => {
  if (k === undefined) { throw new Error('combinations require two args'); }
  if (k > n) { return 0; }
  return factorial(n) / (factorial(k) * factorial(n - k));
}
/**
 * 组合公式，选球里任意组合，例如：6选5
 * combinations
 * 数学公式 Math: n!/r!(n-r)!
 */
export const combinations = baseCombinations(factorialWithCache);
export const combinationsWithoutCache = baseCombinations(factorial);

export default combinations;