//memoization 
//store duplicate subproblems 
//js object, keys will be arg to function (n), value will be the return value
const fib = (n, memo = {}) => {
    //above lets memo = empty obj if it is not specified in function call
    //if the n key is in memo, return value of the key
    if (n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fib(n-1,memo) + fib(n-2,memo);
    console.log(memo);
    //pass updated memo to each recursion 
    return memo[n];
};

console.log(fib(10))
//fib(n);
