function solution() {
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    const storedIngr = {
        fat: 0,
        flavour: 0,
        protein: 0,
        carbohydrate: 0
    }

    function manager(arg) {
        let [command, argument, quantity] = arg.split(' ');
        quantity = Number(quantity);

        if (command === 'restock') {
            storedIngr[argument] += quantity;
            return 'Success'

        } else if (command === 'prepare') {
            let recipe = recipes[argument];
            for (const ingr in recipe) {
                if (recipe[ingr] * quantity > storedIngr[ingr]) {
                    return `Error: not enough ${ingr} in stock`
                }
            }
            for (const ingr in recipe) {
                storedIngr[ingr] -= recipe[ingr] * quantity;
            }
            return 'Success'
        } else if (command === 'report') {
            return `protein=${storedIngr.protein} carbohydrate=${storedIngr.carbohydrate} fat=${storedIngr.fat} flavour=${storedIngr.flavour}`;
        }


    }
    return manager;
}


let manager = solution();
console.log(manager("prepare turkey 1"));
//Error: not enough protein in stock 
console.log(manager("restock protein 10"));
//Success 
console.log(manager("prepare turkey 1"))
//Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10"))
//Success 
console.log(manager("prepare turkey 1"))
//Error: not enough fat in stock 
console.log(manager("restock fat 10"))
//Success 
console.log(manager("prepare turkey 1"))
//Error: not enough flavour in stock 
console.log(manager("restock flavour 10"))
//Success 
console.log(manager("prepare turkey 1"))
//Success 
console.log(manager("report"))
//protein=0 carbohydrate=0 fat=0 flavour=0 