function solve (arr){
let obj = {};

for (const line of arr) {
    let [product, price] = line.split(' : ');
    let letter = product[0]

    if(obj.hasOwnProperty(letter) === false){
        obj[letter] = {}
    }

    obj[letter][product] = price;

}

let sortedLett = Object.keys(obj).sort((a,b) => a.localeCompare(b))

for (const letter of sortedLett) {
    console.log(letter);
    let sortedProd = Object.keys(obj[letter]).sort((a,b) => a.localeCompare(b))

    for (const product of sortedProd) {
        console.log(`  ${product}: ${obj[letter][product]}`);
    }
}

}