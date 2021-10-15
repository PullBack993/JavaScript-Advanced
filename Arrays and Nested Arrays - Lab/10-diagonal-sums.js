function diagonal(arr){
    sumFirstDiagonal = 0;
    sumSecondDiagonal = 0;
    for(let r = 0; r < arr.length; r++){
        sumFirstDiagonal += arr[r][r];
        sumSecondDiagonal += arr[arr.length - 1 - r][r];
        
    }
    let result = [];
    result.push(sumFirstDiagonal);
    result.push(sumSecondDiagonal);

    return result.join(" ");
}



console.log(diagonal([[20, 40],
                     [10, 60]]
));

console.log(diagonal([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   
));