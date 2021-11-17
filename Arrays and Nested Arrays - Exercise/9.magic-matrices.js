function magicM(arr){
    let magicalN = 0
    for (let i = 0; i < arr[0].length; i++){
        magicalN += arr[0][i];
    }

    for (let r = 0; r < arr.length;r++){
        let sumOfR = 0 
        let sumOfC = 0
        for (let c = 0; c < arr.length;c++){
        sumOfR += arr[r][c]
        sumOfC += arr[c][r]
        }if (magicalN !== sumOfC || magicalN !== sumOfR){
            return false
        }
        
    }
    return true
}


console.log(magicM([[4, 5, 6],
                    [6, 5, 4],
                    [5, 5, 5]]
   ));

console.log(magicM([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ));

console.log(magicM([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ));