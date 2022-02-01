function cooking(num, ...params){
    let number = Number(num);
    for (let i = 0; i < params.length; i++){
        let operator = params[i];

        if(operator == 'chop'){
            number /= 2;
        }else if (operator == 'dice'){
            number = Math.sqrt(number);
        }else if (operator == 'spice'){
            number++;
        }else if(operator == 'bake'){
            number *= 3
        }else if(operator == 'fillet'){
            number -= 0.2 * number 
        }
        console.log(number)
    }   
}

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')