function solve (){
    let fighter = (name) => {
        return{
            name,
            health: 100,
            stamina: 100,
            fight() {
                this.stamina-=1;
                console.log(`${name} slashes at the foe!`);
            }
        }
    }

    let mage = (name) => {
        return {
            name,
            health: 100,
            mana: 100,
            cast(spelName) {
                this.mana-=1;
                console.log(`${name} cast ${spelName}`);
            }
        }
    }

    return {fighter: fighter, mage: mage};
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()
console.log(scorcher2.stamina);
console.log(scorcher.mana);