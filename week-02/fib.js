function fib(n) {

    if(0==n){
        return 0;
    }

    else if(1==n){
        return 1;
    }

    else{
        const Sn = fib(n-1)+fib(n-2);
        return Sn;
    }
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(5));
console.log(fib(10));
