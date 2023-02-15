function solve(input){
const result = input.reduce((acc, curr) =>{
    const [name, level, items] = curr.split(' / ');
    const hero = {
        name,
        level: Number(level),
        items: items ? items.split(', ') : [],
    }
    acc.push(hero);
    return acc;
}, []);
return JSON.stringify(result)

}