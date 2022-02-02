function grd(a,b){

    while(b > 0){
        let temp = b;
        b = a % b;
        a = temp
    }
    console.log(a)
}

grd(2154, 458)