function sameNumbers(num) {
    const numStr = num.toString()
    let sum = 0;
    let isSame = true;

    for (let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i]);
        if (numStr[0] != numStr[i]) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);
