function nameSort(names){
    names.sort((a, b) => a.localeCompare(b));
    let counter = 1


    names.forEach(function (element) {
        console.log(`${counter}.${element}`);
        counter++;
    })
}





nameSort(["John", "Bob", "Christina", "Ema"])