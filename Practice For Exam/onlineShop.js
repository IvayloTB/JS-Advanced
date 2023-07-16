class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = Number(warehouseSpace);
        this.products = [];
        this.sales = [];


    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < quantity) {
            throw new Error("Not enough space in the warehouse.")
        } else {
            quantity = Number(quantity)
            this.products.push({ product, quantity })
            this.warehouseSpace -= spaceRequired;
            return `The ${product} has been successfully delivered in the warehouse.`
        }
    }

    quantityCheck(product, minimalQuantity) {
        minimalQuantity = Number(minimalQuantity)
        for (let i = 0; i < this.products.length; i++) {
            const elem = this.products[i]
            if (elem.product === product) {
                if (minimalQuantity > 0) {
                    if (minimalQuantity <= elem.quantity) {
                        return `You have enough from product ${product}.`
                    } else {
                        const difference = minimalQuantity - elem.quantity;
                        this.products[i].quantity += difference;
                        return `You added ${difference} more from the ${elem.product} products.`
                    }

                } else {
                    throw new Error("The quantity cannot be zero or negative.")
                }
            } else if (i == this.products.length - 1) {
                throw new Error(`There is no ${product} in the warehouse.`)
            }
        }
    }

    sellProduct(product) {
        const currSale = { product, quantity: 0 }
        for (let i = 0; i < this.products.length; i++) {
            const elem = this.products[i];

            if (elem.product === product) {

                this.sales.push(currSale)
                this.sales[i].quantity += 1

                for (let j = 0; j < this.sales.length; j++) {
                    if (this.sales.length > 1) {
                        if (this.sales[j].quantity === 0) {
                            this.sales.splice(j, 1)
                        }
                    }
                }

                this.products[i].quantity -= 1
                return `The ${product} has been successfully sold.`

            } else if (i == this.products.length - 1) {
                throw new Error(`There is no ${product} in the warehouse.`)
            }

        }


    }

    revision() {
        if (this.sales.length === 0) {
            return `There are no sales today!`
        } else {
            let str = `You sold ${this.sales.length} products today!\nProducts in the warehouse:`
            for (const elem of this.products) {
                str += `\n${elem.product}-${elem.quantity} more left`
            }
            return str
        }
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptooop', 5, 200));
console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptooop', 10));
console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('headphones'));


console.log(myOnlineShop.sellProduct('laptooop'));
console.log(myOnlineShop.revision());


//The headphones has been successfully delivered in the warehouse.
//The laptop has been successfully delivered in the warehouse.
//You have enough from product headphones.
//You added 5 more from the laptop products.
//The headphones has been successfully sold.
//The laptop has been successfully sold.
//You sold 2 products today!
//Products in the warehouse:
//headphones-9 more left
//laptop-9 more left 