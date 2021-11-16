function solve(arr){
    result = [];
    for (let w = 0;w < arr.length; w++){
        if (arr[w] === 'add'){
            result.push(w+1);
        }
        else if (arr[w] === 'remove'){
            result.pop();
        }
    }
    if (result.length > 0){
        return result.join('\n');
    } else {
        return 'Empty';
    }
    
}



console.log(solve(['add', 
'add', 
'add', 
'add']
));

console.log(solve(['add', 
'add', 
'remove', 
'add', 
'add']
));

console.log(solve(['remove', 
'remove', 
'remove']
));