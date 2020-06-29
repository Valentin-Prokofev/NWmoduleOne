function chooseIncome() {
    for (let i = 0; i < 1; i++ ){
        let items = prompt("What are your additional revenue items? (list with a comma)", "");
    
    
    if (typeof(items) === "string" && typeof(items) != null && items != "") {
        alert(items);
    } else {
        i = i - 1;
    }
}
    // appData.income = items.split(", ");
    // appData.income.push(prompt("May be something else?"));
    // appData.income.sort();
    
    
}
chooseIncome();