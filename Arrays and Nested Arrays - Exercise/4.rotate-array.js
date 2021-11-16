function arrayRotate(arr,xRotate){
    let rotate = xRotate % arr.length
    for (let i = 0;i < rotate; i++){
        let lasttEl = arr.pop();
        arr.unshift(lasttEl);
    }
    return arr.join(' ')
}



console.log(arrayRotate(['1', 
'2', 
'3', 
'4'], 
2
));

console.log(arrayRotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
));