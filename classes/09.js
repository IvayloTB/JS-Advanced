function solve(input){
     const cars = new Map;

     for (const line of input) {
        let [brand, model ,quantity] = line.split(' | ')
        quantity = Number(quantity);

        if(!cars.has(brand)){
            cars.set(brand, {})
        }

        if(!cars.get(brand).hasOwnProperty(model)){
            cars.get(brand)[model] = quantity;
        }else{
            cars.get(brand)[model] += quantity;
        }
     }

     for (const car of cars) {
        console.log(car[0]);
        const models = car[1];
        for (const model of Object.keys(models)) {
            console.log(`###${model} -> ${models[model]}`);
        }
     }
}