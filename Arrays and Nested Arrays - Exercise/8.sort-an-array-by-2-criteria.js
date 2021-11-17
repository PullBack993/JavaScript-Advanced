function solve(words){
    words.sort(sortTwoCriteria);
    return words.join("\n")

    function sortTwoCriteria(a, b){
        if (a.length === b.length){
            return a.localeCompare(b);
        }
        return a.length - b.length
    }
}





console.log(solve(['alpha', 
'beta', 
'gamma']
));

console.log(solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

));