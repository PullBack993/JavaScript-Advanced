function biggestEl(el){
    let biggest = el[0][0]
    for (let r = 0; r < el.length; r++){
        for(let c = 0; c <= el.length; c++){
            if (biggest < el[r][c]){
                biggest = el[r][c];

            }
            
        }
    }
        
    return biggest
    }
        
let a = biggestEl([[20, 50, 10],
    [8, 33, 145]]
   );

console.log(a)

console.log(biggestEl([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));