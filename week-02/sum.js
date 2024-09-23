function sum(ary){
    let valueSum = ary.reduce(function(total, e){
        return total+e;
    });

    return valueSum;
}

console.log(sum([1, 5, 3, 2]));
