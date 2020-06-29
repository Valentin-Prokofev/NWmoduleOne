// let money, time;



// function start() {
//     money = +prompt("Ваш бюджет на месяц?", "");
//     time = prompt("Введите дату в формате YYYY-MM-DD", "");

//     while ((isNaN(money)) || money == "" || money == null) {
//         money = +prompt("Ваш бюджет на месяц?", "");
//     }
// }
// start();

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: true
// };

// function chooseExpenses() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//             b = prompt("Во сколько обойдется?", "");

//         if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && a != '' && a.length < 50) {
//             console.log("done");
//             appData.expenses[a] = b;
//         } else {
//             i = i - 1;
//         }
//     }
// }
// chooseExpenses();


// function detectDayBudget() {
//     appData.moneyPerDay = (appData.budget / 30).toFixed();
//     alert("your budget per day :" + " " + appData.moneyPerDay);
// }
// detectDayBudget();


// function checkSavings() {
//     if (appData.savings == true) {
//         let save = +prompt("What is the amount of savings?"),
//             percent = +prompt("What is the percentage of deposit?");

//         appData.monthIncome = save / 100 / 12 * percent;
//         alert("Income per month from your deposit :" + appData.monthIncome);
//     }
// }
// checkSavings();


// function detectLevel() {
//     if (appData.moneyPerDay < 100) {
//         console.log("minimum level of wealth");
//     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//         console.log("average level of wealth");
//     } else if (appData.moneyPerDay > 2000) {
//         console.log("high level of wealth");
//     } else {
//         console.log("Error");
//     }
// }
// detectLevel();


// function chooseOptExpenses() {
//     let first = prompt("1 an item of optional expenses?", ""),
//         second = prompt("2 an item of optional expenses?", ""),
//         third = prompt("3 an item of optional expenses?", "");

//     appData.optionalExpenses[1] = first;
//     appData.optionalExpenses[2] = second;
//     appData.optionalExpenses[3] = third;
// }
// chooseOptExpenses();

                                                                 //O-B-J-E-C-T-S
// let options = {
// width: 1024,
// heigth: 500,
// name: "test"
// };

// console.log(options.name);

// options.bool = false;
// options.colors = {
//     color: "Red",
//     bg: "black"
// };

// console.log(options);

// delete options.bool;
// console.log(options);

// for (let key in options) {
//     console.log("property " + key  + " has value " + options[key] ); 
// }

// console.log(Object.keys(options).length);

                                                                //A-R-R-A-I-E-S

// let arr = ["first", 2, 3, "four", 5];

// arr[99] = 99;
// console.log(arr.length);



// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift(1);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass) {
// console.log(i + ": " + item + " (array: " + mass + ")");
// });
// let newArr = [1,3,4,6,7];
// for (let key of newArr) {
//     console.log(key);
// }
// console.log(arr);

// let answ = prompt("", ""),
//     arr = [];

//     arr = answ.split(",");
//     console.log(arr);


// let arr = ['firasdc', 'dcsadc', 'sadcwas'],
//     i = arr.join(",");

//     console.log(i);

// let arr = [1, 15, 4],
//     i = arr.sort(compareNum);     //функция sort в JS основана на алгоритме быстрой сортировки 

//     function compareNum(a, b) {      
//         return a-b;
//     }

//     console.log(arr);

function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        alert (name); // displayName() uses variable declared in the parent function    
    }
    displayName();    
}
init();