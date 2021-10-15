function neighbors(matrix){
    let result = 0;

    for (let row = 0; row < matrix.length - 1; row ++){
        for (let col = 0; col < matrix[row].length; col++){
            if (matrix[row][col] === matrix[row + 1][col]){
                result++;
            }
            if (matrix[row][col] === matrix[row][col + 1]){
                result++;
            }
            if (row === matrix.length - 2 && matrix[row + 1][col] === matrix[row + 1][col + 1]) {
                result++;
            }
        }
    }
    return result
}

console.log(neighbors([ ['2', '2', '2', '7', '0'],
                        ['4', '2', '5', '3', '4'],
                        ['2', '3', '5', '4', '2'],
                        ['9', '8', '7', '5', '4']]
));