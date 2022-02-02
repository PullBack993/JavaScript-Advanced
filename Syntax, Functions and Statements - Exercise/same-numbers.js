function numbersChecker(number) {
    let numbers = String(number).split("").map((number)=>{
        return Number(number)
      })
    let allSame = true
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        let currentElement = Number(numbers[i])
        sum += currentElement

        if (currentElement != numbers[0]) {
            allSame = false
        }
    }

    console.log(allSame)
    console.log(sum)
}
