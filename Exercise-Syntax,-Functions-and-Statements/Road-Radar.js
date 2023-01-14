function roadRadar(speed, area) {
    let speedLimit = 0;
    let diff = 0;
    let status = '';
    switch (area) {
        case "motorway":
            speedLimit = 130;
            break;

        case "interstate":
            speedLimit = 90;
            break;

        case "city":
            speedLimit = 50;
            break;

        case "residential":
            speedLimit = 20;
            break;
    }
    diff = speed - speedLimit;

    if (diff > 0) {
        if (diff > 40) {
            status = 'reckless driving'
        } else if (diff > 20) {
            status = 'excessive speeding'
        } else {
            status = 'speeding'
        }

        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
}
roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')

