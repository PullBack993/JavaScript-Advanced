function evenPositEl(numbers){
    let result = []
    for (let i = 0; i < numbers.length; i++){
        if (i % 2 == 0){
            result.push(numbers[i]);
        }
    }
        console.log(result.join(' '))
}



evenPositEl(['20', '30', '40', '50', '60'])