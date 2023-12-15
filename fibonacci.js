const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
console.log(fib(7));

// Memoization
// keys will be argument and the values will be the return value

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144;


