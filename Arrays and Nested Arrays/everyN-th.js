function everyNth(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += num) {
        newArr.push(arr[i]);

    }
   return newArr;
}
everyNth(['1',

    '2',

    '3',

    '4',

    '5'],

    2)