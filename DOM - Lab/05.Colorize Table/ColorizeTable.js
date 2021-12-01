function colorize() {
    let elements = Array.from(document.querySelectorAll('tr')).slice(1);
    for (let index = 0; index < elements.length; index+=2) {
        elements[index]
        .style
        .background = 'teal'
        
    }
}