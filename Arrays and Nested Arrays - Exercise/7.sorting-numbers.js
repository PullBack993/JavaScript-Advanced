function numbersSort(nums){
    nums.sort((a,b) => a - b);
    let result = [];
    while (nums.length > 0){
        result.push(nums.shift());
        if (nums.length !== 0){
            result.push(nums.pop());
        }
    }
    
    return result
}

console.log(numbersSort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
