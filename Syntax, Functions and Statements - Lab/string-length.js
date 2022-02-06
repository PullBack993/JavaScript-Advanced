function stingLength(firstParam, secondParam, thirdParam){
    let sumStrings = firstParam.length + secondParam.length + thirdParam.length;
    let avarageLength = Math.floor(sumStrings / 3);
    console.log(sumStrings);
    console.log(avarageLength);
}


stingLength('chocolate', 'ice cream', 'cake')