function solve(arr){
    let res = [];
    class Town {
        constructor(town, latitude, longtitude){
            this.Town = town;
            this.Latitude = Number(latitude);
            this.Longitude = Number(longtitude);
        }
    }

    for(let i = 1;i<arr.length;i++){
        let array = arr[i].split('|').map(t => t.trim()).filter(x => x.length != 0)
        let townName = array[0];
        let latitude = Number(array[1]).toFixed(2)
        let longtitude = Number(array[2]).toFixed(2)
        let town = new Town(townName, latitude, longtitude)
        res.push(town)
    }
    return JSON.stringify(res)
}