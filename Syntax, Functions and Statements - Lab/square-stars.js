function drawStars(size= 5) {
    let line = '* '.repeat(size);

    for (let i = 0; i < size; i++) {
        console.log(line);
    }
}


drawStars(1)
drawStars(3)
drawStars(5)
drawStars()