function solve(arr){
    result = [arr[0]];
    for (let i = 1; i < arr.length; i++){
        if (result[result.length - 1] <= arr[i]){
            result.push(arr[i]);
        }
    }
    return result;
}



console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));


console.log(solve([1, 
    2, 
    3,
    4]
    ));

console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    ));