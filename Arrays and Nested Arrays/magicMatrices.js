function magicMatrices(arr) {
    let row = 0;
    let coll = 0;

    for (let i = 0; i < arr.length; i++) {
        const currArr = arr[i].join('');

        for (let j = 0; j < currArr.length; j++) {
            row += Number(currArr[j]);
            coll += Number(currArr[0]);

        }
    }

    if (row === coll) {
        console.log('true');
    } else {
        console.log('false');
    }

}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])


magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])


magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])
