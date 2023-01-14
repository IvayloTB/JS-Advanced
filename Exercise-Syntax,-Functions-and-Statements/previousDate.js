function previousDate(year, month, day){
    const date = new Date(year, month -1, day -1);


console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);



}
previousDate(2016, 9, 30 );
previousDate(2015, 5, 1 );