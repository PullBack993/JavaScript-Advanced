function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    // 1.(Input) Select element and pars it.
    let getText = document.querySelector("#inputs textarea").value;
    let inputArr = JSON.parse(getText);

    // 2.(Main logic) Split data and fill restaurants object(RestName: WorkerName, WorkerSalary, AVG:function)
    let restaurants = {};
    for (let index = 0; index < inputArr.length; index++) {
      let [restaurantName, workersString] = inputArr[index].split(" - ");
      let inputWorkers = workersString.split(", ").map((wrk) => {
        let [name, salary] = wrk.split(" ");
        return { name, salary: Number(salary) };
      });

      if (!restaurants[restaurantName]) {
        restaurants[restaurantName] = {
          //2.1 All workersArr: [{ name: "Peter", salary: 500 }]
          workers: [],
          restaurantName: restaurantName,
          getAverageSalary: function () {
            return (
              this.workers.reduce((acc, el) => acc + el.salary, 0) /
              this.workers.length
            );
          },
        };
      }
      restaurants[restaurantName].workers =
        restaurants[restaurantName].workers.concat(inputWorkers);
    }
    //2.2 Taka best result(averageSalary)
    let sortedRestaurants = Object.values(restaurants).sort(
      (a, b) => b.getAverageSalary() - a.getAverageSalary()
    );
    // 2.3 Various variables for easier tracking and operation.
    let bestRestaurant = sortedRestaurants[0];
    let sortedWorkers = bestRestaurant.workers.sort(
      (a, b) => b.salary - a.salary
    );
    let averageSalary = bestRestaurant.getAverageSalary().toFixed(2);

    let bestSalary = sortedWorkers[0].salary.toFixed(2);
    let topRestaurantString = `Name: ${bestRestaurant.restaurantName} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`;
    let workersOutput = sortedWorkers
      .map((w) => `Name: ${w.name} With Salary: ${w.salary}`)
      .join(" ");

    // 3. (Output) Insert best restaurant and workers data into DOM
    let bestRestElement = document.querySelector("#bestRestaurant p");
    let workersElement = document.querySelector("#workers p");

    bestRestElement.textContent = topRestaurantString;
    workersElement.textContent = workersOutput;
  }
}
