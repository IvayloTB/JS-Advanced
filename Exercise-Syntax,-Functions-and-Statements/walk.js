function walk(steps, stepsLength, kmH) {

    const distance = steps * stepsLength;
    const metersPerSec = kmH / 3.6;
    const rest = Math.floor(distance / 500) * 60;
    const time = distance / metersPerSec + rest;
    const hours = Math.floor(time / 3600);
    const min = Math.floor(time / 60);
    const sec = Math.round(time % 60);


    console.log(`${hours < 10 ? '0' : ''}${hours}:${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`);
}
walk(4000, 0.60, 5)
walk(2564, 0.70, 5.5)
