function smallestTwo(nums){
    let res = nums.sort((a,b) => a - b).slice(0, 2);
    console.log(res.join(" "));
}    



smallestTwo([30, 15, 50, 5])