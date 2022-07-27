/*
    Fibonacci Series: 0 1 1 2 3 5 8 13 21 34 55 89
*/
class Fibonacci {
    getFibonacciSum(n)
    {
        if(n <= 1) {
            return 1;
        }
        return this.getFibonacciSum(n-1) + this.getFibonacciSum(n-2)
    }

    createFibonacciSeries(n)
    {
        let i = 0;
        let initial = 0;
        let lastValue = 1;
        let sum= 0;
        let str = 'Fibonacci Series: 0';
      
        while(i <= n) {
            sum = initial + lastValue
            initial = lastValue;
            lastValue = sum;
            str += ` ${initial}`; 
            i++;
        }
        console.log('\x1b[46m', str);
    }

}
let fib  = new Fibonacci();
console.log('\x1b[46m','Sum of Fibonacci: ' + fib.getFibonacciSum(10));
fib.createFibonacciSeries(10);