class footballTeam{
    constructor(clubName, country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers){
        for (const line of footballPlayers) {
            let [name, age, playerValue] = line.split('/');
            playerValue = Number(playerValue);
            age = Number(age);
            let player = this.invitedPlayers.find((x) => x.name)
            if(player){
                if(player.playerValue < playerValue){
                    player.playerValue = playerValue;
                }
            }else{
                this.invitedPlayers.push({name, age, playerValue})
            }


        }
    }

}

let fTeam = new footballTeam("Barcelona", "Spain"); 
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"])); 
console.log(fTeam.signContract("Kylian Mbappé/240")); 
console.log(fTeam.ageLimit("Kylian Mbappé", 30)); 
console.log(fTeam.transferWindowResult()); 