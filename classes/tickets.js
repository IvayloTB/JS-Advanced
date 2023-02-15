function tickets (arr, sortBy){

    class Tickets {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const tickets = [];
    for (const line of arr) {
        let [destination, price, status] = line.split('|');
        price = Number(price);
       const tiket = new Tickets(destination, price, status);
       tickets.push(tiket); 
    }

    const sorted = tickets.sort((a,b) =>{
        if(sortBy === 'destination' ){
           return a.destination.localeCompare(b.destination);
        }else if(sortBy === 'status'){
            return a.status.localeCompare(b.status);
        }else if(sortBy === 'price'){
            return a.price - b.price;
        }
    })

return sorted
    
}
console.table(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));

    