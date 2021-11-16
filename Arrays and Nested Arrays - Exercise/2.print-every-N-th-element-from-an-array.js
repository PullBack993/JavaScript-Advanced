function solve(arr,num){
    result = []
    for (let n = 0; n < arr.length; n+=num){
        result.push(arr[n])
    }
    return result
}


console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));



console.log(solve(['dsa',
'asd', 
'test', 
'tset'], 
2
));


console.log(solve(['1', 
'2',
'3', 
'4', 
'5'], 
6
));
