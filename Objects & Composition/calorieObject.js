function calorieObject(arr) {
    let products = {};
    for (let i = 0; i < arr.length; i += 2) {
        const product = arr[i];
        const cal = Number(arr[i + 1]);

        products[product] = cal;

    }
    console.log(products);

}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])

