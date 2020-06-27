let money, time;



function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    
    while ((isNaN(money)) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money, 
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses () {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""), 
            b = prompt("Во сколько обойдется?", "");
            
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && a != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
    }
}
chooseExpenses();


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("your budget per day :" + " " + appData.moneyPerDay);
}
detectDayBudget();


function checkSavings() {
        if (appData.savings == true) {
                let save = +prompt("What is the amount of savings?"),
                percent = +prompt("What is the percentage of deposit?");

                appData.monthIncome = save/100/12*percent;
                alert("Income per month from your deposit :" + appData.monthIncome);
            }
    }
    checkSavings();

    
function detectLevel() {
     if (appData.moneyPerDay < 100) {
            console.log("minimum level of wealth");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("average level of wealth");
        } else if (appData.moneyPerDay > 2000) {
            console.log("high level of wealth");
        } else {
            console.log("Error");
        }  
    }
detectLevel();


function chooseOptExpenses() {

        // for (let i = 0; i < 2; i++) {
            let first = prompt("1 an item of optional expenses?", ""),
                second = prompt("2 an item of optional expenses?", ""),
                third = prompt("3 an item of optional expenses?", "");
                
                // if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && a != '' && a.length < 50) {
                //     console.log("done");
                    appData.optionalExpenses[1] = first;
                    appData.optionalExpenses[2] = second;
                    appData.optionalExpenses[3] = third;
                // } else {
                //     i = i - 1;
                // }
        // }

}
chooseOptExpenses();


