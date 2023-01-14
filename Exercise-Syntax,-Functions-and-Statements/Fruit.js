function fruit(fruit, weightGr, priceForKg) {
    const money = (weightGr / 1000) * priceForKg;

    return (`I need $${money.toFixed(2)} to buy ${(weightGr / 1000).toFixed(2)} kilograms ${fruit}.`);
}
console.log(fruit('orange', 2500, 1.80));
console.log(fruit('apple', 1563, 2.35));
