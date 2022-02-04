function findWords(text){
    let regex = text.split(/\W+/g);
    let words = [];
    for (const word of regex){
        if (word !== ''){
            words.push(word.toUpperCase());
        }
    }
    let toprint = (words.join(", "))
    console.log(toprint)
}   

findWords('Hi, how are you?')   