function rotateArray(arr, moves) {

    for (let i = 0; i < moves; i++) {
        const back = arr[arr.length - 1];
        arr.pop()
        arr.unshift(back);
    }


    console.log(arr.join(' '));
}
rotateArray(['1',

    '2',

    '3',

    '4'],

    2)



rotateArray(['Banana',

    'Orange',

    'Coconut',

    'Apple'],

    15)
