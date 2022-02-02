function timeToUniversity(stepToUniversity, lengthMeters, studentSpeed){
    let distance = stepToUniversity * lengthMeters;
    let breaks = Math.trunc(distance / 500) * 60;
    // 1km == 1000m
    // 1h = 60 * 60 == 3600s
    // 3.6m/s
    let time = Math.round(distance / studentSpeed * 3.6 + breaks);  
    let seconds = time % 60;
    let minutes = Math.trunc((time % 3600) / 60);
    let hours = Math.trunc(time / 3600);


    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`)

}

timeToUniversity(4000, 0.60, 5) // 00:32:48
timeToUniversity(2564, 0.70, 5.5) // 00:22:35