let money = +prompt("Ваш бюджет на месяц?", "10000"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-06-25");

let appData = {
    budget: money, 
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
            
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && a != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {

            }
    };

    appData.moneyPerDay = appData.budget/30;

    alert("your budget per day :" + " " + appData.moneyPerDay);

    if (appData.moneyPerDay < 100) {
        console.log("minimum level of wealth");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("average level of wealth");
    } else if (appData.moneyPerDay > 2000) {
        console.log("high level of wealth");
    } else {
        console.log("Error");
    }



     //let num = 50;
    // while (num < 55) {
    //     console.log(num);
    //     num++;
    // }

    // do {
    //     console.log(num);
    //     num++;
    // }
    // while (num <55);

    // for (let i = 1; i < 8; i++) {
    //     if (i == 6) {
    //         continue;
    //     }
    //     console.log(i);
    // }

