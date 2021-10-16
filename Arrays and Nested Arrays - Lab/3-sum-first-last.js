function sumLastFirst(nums){

    let sum = 0;
    let first = Number(nums[0]);
    let last = Number(nums[nums.length - 1]);
    sum += first + last;
    console.log(sum);
}

sumLastFirst(['20', '30', '40'])
sumLastFirst(['5', '10'])