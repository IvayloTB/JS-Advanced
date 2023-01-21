function extractIncreasing(arr) {
    let newArr = [];
    let bigestNum = arr[0];
    newArr = arr.reduce((acc, currVall) => {
        if (bigestNum <= currVall) {
            bigestNum = currVall;
            acc.push(bigestNum);
        }
        return acc;

    }, []);

    return newArr
}

extractIncreasing([1,

    3,

    8,

    4,

    10,

    12,

    3,

    2,

    24])

console.log('--------+++++++--------');
extractIncreasing([20,

    3,

    2,

    15,

    6,

    1])