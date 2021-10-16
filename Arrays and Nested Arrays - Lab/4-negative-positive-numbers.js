function negativePositiveSort(numbers){
    let sortedNums = []
    for (const num of numbers) {
        if (num < 0){
            sortedNums.unshift(num);

        }else{
            sortedNums.push(num);
        }
    }
    console.log(sortedNums.join('\n'))
}


negativePositiveSort([7, -2, 8, 9])
negativePositiveSort([3, -2, 0, -1])