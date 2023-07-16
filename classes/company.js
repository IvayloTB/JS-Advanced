class Company {
    constructor(){
        this.departments = [];
    }

    addEmployee(user, salary, position, department){
        if(!user || !salary || !position || !department || salary < 0){
            throw new Error('Invalid input!');
        }else{
            if(!this.departments[department]){
                this.departments[department] = []
            }
            this.departments[department].push({user, salary, position});
            return `New employee is hired. Name: ${user}. Position: ${position}`
        }
    }

    bestDepartment(){
        const avgDep = {};
        Object.keys(this.departments).forEach((key) => {
            const average = 
            this.departments[key].reduce((acc, curr) => acc + curr.salary, 0) / this.departments[key].length;
            avgDep[key] = average
        });

        const sorted = Object.entries(avgDep).sort((a,b) => b[1] - a[1]);
        let result = `Best Department is: ${sorted[0][0]}\nAverage salary: ${sorted[0][1].toFixed(2)}`;
        this.departments[sorted[0][0]].sort((a,b) => b.salary - a.salary || a.user.localeCompare(b.user)).forEach((x) => {
            result += `\n${x.user} ${x.salary} ${x.position}`;
        });
        return result
    }

}