function oddPosition(nums){
    let result = nums.filter((a,i) => i % 2 !== 0).map(x => x * 2).reverse().join(' ');
    return result
}

oddPosition([10, 15, 20, 25])