class WineSelection{
    constructor(space){
        this.space = Number(space);
        this.wines = [];
        this.bill = 0;
        this.bottle = 0;
    }

    reserveABottle (wineName, wineType, price){
        if(this.space <= this.bottle){
            throw new Error( "Not enough space in the cellar.")
        }else{
            this.wines.push({wineName, wineType, price, paid: false});
            this.bottle ++;
            return`You reserved a bottle of ${wineName} ${wineType} wine.`
        }
    }

    payWineBottle( wineName, price ){
        let wine = this.wines.find(p => p.wineName == wineName);
        let paid = this.wines.find(p => p.paid === true)
        if(!wine){
            throw new Error(`${wineName} is not in the cellar.`)
        }

        if(paid){
            throw new Error(`${wineName} has already been paid.`)
        }else{
            wine.paid = true
            this.bill += Number(price)
            return`You bought a ${wineName} for a ${price}$.`
        }
    }

    openBottle(wineName){
        let wine = this.wines.find(p => p.wineName == wineName);
        if(!wine){
            throw new Error("The wine, you're looking for, is not found.")
        }

        

        if(!wine.paid){
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }else{
            const index = this.wines.indexOf(wine)
            this.wines.splice(index, 1)
            return`You drank a bottle of ${wineName}.`
        }
    }

  

    cellarRevision(wineType){
        let sorted = this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName))
        let wineTy = this.wines.find(p => p.wineType == wineType);

        if(wineTy){
            let wine = this.wines.find(p => p.wineType == wineType);
            return `${wine.wineName} > ${wine.wineType} - ${ wine.paid ? 'Has Paid' : 'Not Paid'}.`

        }else if(sorted.wineType != wineType){
            throw new Error(`There is no ${wineType} in the cellar.`);
        }

        let result =`You have space for ${this.space - this.bottle} bottles more.`
        result += `\nYou paid ${this.bill}$ for the wine.`
        for (const wine of sorted) {
            result += `\n${wine.wineName} > ${wine.wineType} - ${ wine.paid ? 'Has Paid' : 'Not Paid'}.`
        }
        return result

    }


}
const selection = new WineSelection(5) 

selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144); 

selection.payWineBottle('Bodegas Godelia Mencía', 144); 

selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50); 

selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120); 

console.log(selection.cellarRevision()); 