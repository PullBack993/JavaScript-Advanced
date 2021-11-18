function solve(dbTickets, criteria) {
    class Ticket{
        constructor(destination,price,status){
            this.destination = destination
            this.price = price
            this.status = status
        }
    }
    let result = []

    for (let i = 0; i < dbTickets.length; i++) {
        let [destination, price, status] = dbTickets[i].split("|")
        result.push(new Ticket(destination,Number(price),status))
    }

    if (criteria == 'destination'){
        result.sort((a,b) => {
           return a.destination.localeCompare(b.destination)
        })
    }else if(criteria == 'price'){
        result.sort((a,b) => {
            return a.price - b.price
        })
    }else{
        result.sort((a,b) => {
            return a.status.localeCompare(b.status)
        })
    }
    return result
}







// console.log(solve(['Philadelphia|94.20|available',
//  'New York City|95.99|available',
//  'New York City|95.99|sold',
//  'Boston|126.20|departed'],
// 'destination'))


console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
))