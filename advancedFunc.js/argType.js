function solve(...arg) {
    let map = new Map();

    arg.forEach((element) => {
        const type = typeof (element);
        console.log(`${type}: ${element}`);

        if (!map.has(type)) {
            map.set(type, 0);
        }

        map.set(type, map.get(type) + 1);
    });

    Array.from(map.entries()).sort((a, b) => b[1] - a[1]).forEach((el) => {
        console.log(`${el[0]} = ${el[1]}`);
    })
}
solve('cat', 42, 56, function () { console.log('Hello world!'); })