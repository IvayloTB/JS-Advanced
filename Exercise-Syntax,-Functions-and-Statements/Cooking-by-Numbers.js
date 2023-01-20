function cookingNum(num, ...commands) {
    num = Number(num);

    const chop = (x) => x / 2;
    const dice = (x) => Math.sqrt(x);
    const spice = (x) => x + 1;
    const bake = (x) => x * 3;
    const fillet = x => (x * 0.8).toFixed(1);

    for (const comm of commands) {
        switch (comm) {
            case "chop": num = chop(num); break;
            case "dice": num = dice(num); break;
            case "spice": num = spice(num); break;
            case "bake": num = bake(num); break;
            case "fillet": num = fillet(num); break;
        }
        console.log(num);
    }
}

cookingNum('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingNum('9', 'dice', 'spice', 'chop', 'bake', 'fillet')

//chop - divide the number by two
//dice - square root of a number
//spice - add 1 to the number
//bake - multiply number by 3
//fillet - subtract 20% from the number 