function solve(input) {
    let [columns, ...table] = input.map(splitItem);

    function splitItem(input) {
        return input.split('|').filter(isEmptyString).map(x=>x.trim()).map(convertIfNum)
    }

    function isEmptyString(x) {
        return x !== ""
    }
    function convertIfNum(x) {
        return isNaN(x) ? x : Number(Number(x).toFixed(2))
        
    }

    return JSON.stringify(table.map(entry => {
        return columns.reduce((acc,current,index)=>{
            acc[current] = entry[index];
            return acc;
        }, {} )
    }))
    
}
console.log(
  solve([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
  ])
);
