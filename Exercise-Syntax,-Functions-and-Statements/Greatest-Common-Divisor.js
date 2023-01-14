function devisor(firstDig, secondDig) {
    let gcd = 0;

    for (let i = 0; i < firstDig; i++) {

        if (firstDig % i === 0 && secondDig % i === 0 && firstDig > 0 && secondDig > 0) {
            
            gcd = i;
            
        }
    }
    return (gcd);
}

console.log(devisor(81, 18));
console.log(devisor(2154, 458));
