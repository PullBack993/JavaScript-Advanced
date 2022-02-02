function roadRadar(speed, area){
    let limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,

    }
    if (limits[area] >= speed){
        console.log(`Driving ${speed} km/h in a ${limits[area]} zone`);
    }
    else if (limits[area] + 20 >= speed){
        console.log(`The speed is ${speed - limits[area]} km/h faster than the allowed speed of ${limits[area]} - speeding`);
    }
    else if (limits[area] + 40 >= speed){
        console.log(`The speed is ${speed - limits[area]} km/h faster than the allowed speed of ${limits[area]} - excessive speeding`);
    }
    else{
        console.log(`The speed is ${speed - limits[area]} km/h faster than the allowed speed of ${limits[area]} - reckless driving`);
    }
}

roadRadar(40, 'city')
roadRadar(21, 'residential')