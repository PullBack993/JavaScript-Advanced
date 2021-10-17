function biggerHalf(nums){
    let half = Math.floor(nums.length / 2);
    let result = nums.sort((a, b) => a - b).slice(half)
    return result

}

biggerHalf([3, 19, 14, 7, 2, 19, 6])
biggerHalf([4, 7, 2, 5])