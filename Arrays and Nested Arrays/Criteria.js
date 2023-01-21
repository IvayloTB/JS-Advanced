function solve(arr) {
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    for (const name of arr) {
        console.log(name);
    }
}
solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'])
console.log('/////////////////////////////');
solve(['test',
    'Deny',
    'omen',
    'Default'])
console.log('/////////////////////////////');
solve(['alpha',
    'beta',
    'gamma'])
