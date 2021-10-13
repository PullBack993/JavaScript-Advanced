function lastK(n, k){

    let result = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;

        for (let x = result.length - 1; x > result.length - 1 - k; x--) {
            
            if (result[x] !== undefined) {
                sum += result[x];
            }
        }
        result.push(sum)
    } 
    return result
}

console.log(lastK(6, 3));
console.log(lastK(8, 2));


