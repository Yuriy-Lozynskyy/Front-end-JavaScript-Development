 function fibonacci(num) {
     var cache = {};

     function fib(number) {
         var result;
         if (number in cache) {
             result = cache[number];
         } else {
             if (number <= 0) {
                 return 0;
             } else if (number <= 1) {
                 return 1;
             } else {
                 result = fib(number - 1) + fib(number - 2);
                 cache[number] = result;
             };
         };
         return result;
     };
     return fib(num);
 };

module.exports = fibonacci;