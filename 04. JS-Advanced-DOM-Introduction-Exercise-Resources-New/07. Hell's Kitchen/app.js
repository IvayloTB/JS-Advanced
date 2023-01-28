function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.querySelector("#inputs>textarea");
   const bestRestaurants = document.querySelector("#bestRestaurant p");
   const bestWorkes = document.querySelector("#outputs #workers p")


   function onClick() {
      let arr = JSON.parse(input.value);
      let restaurants = {};

      arr.forEach((line) => {
         const token = line.split(' - ');
         const restaurantName = token[0];
         const workersArr = token[1].split(', ');
         let workers = [];

         for (const worker of workersArr) {
            const workTokens = worker.split(' ');
            const workerName = workTokens[0];
            const workerSalary = Number(workTokens[1]);
            workers.push({ name: workerName, workerSalary });
         }

         if (restaurants[restaurantName]) {
            workers = workers.concat(restaurants[restaurantName].workers);
         }

         workers.sort((w1, w2) => w2.workerSalary - w1.workerSalary);
         const bestSalary = workers[0].workerSalary;
         const avgSalary = workers.reduce((sum, worker) => sum += worker.workerSalary, 0) / workers.length;

         restaurants[restaurantName] = {
            workers,
            bestSalary,
            avgSalary
         }
      });
      
      let bestRestaurantSalary = 0;
      let best = undefined;
      for (const nameRest in restaurants) {
         if (restaurants[nameRest].avgSalary > bestRestaurantSalary) {
            bestRestaurantSalary = restaurants[nameRest].avgSalary;
            best = { nameRest, ...restaurants[nameRest] }
         }
      }
      bestRestaurants.textContent = `Name: ${best.nameRest} Average Salary: ${best.avgSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`;
      
      workersResult = [];
      best.workers.forEach((worker) => {
         workersResult.push(`Name: ${worker.name} With Salary: ${worker.workerSalary}`);
         //debugger;
      });

      bestWorkes.innerText = workersResult.join(' ');
   }
}

//["PizzaHut - Peter 500, George 300, Mark 800",
//"TheLake - Bob 1300, Joe 780, Jane 660"]