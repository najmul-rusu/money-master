function getIncome() {
    const incomeField = document.getElementById('income-field');
    let getIncomeFieldText = incomeField.value;
    let getTotalIncome = parseFloat(getIncomeFieldText);
    return getTotalIncome;
};

function catchBalance() {
    // get food cost
    const foodField = document.getElementById('food-field');
    const getFoodFieldText = foodField.value;
    const foodCost = parseFloat(getFoodFieldText);
    // get rent cost
    const rentField = document.getElementById('rent-field');
    const getRentFieldText = rentField.value;
    const rentCost = parseFloat(getRentFieldText);
    // get clothing cost
    const clothesField = document.getElementById('clothes-field');
    const getClothesFieldText = clothesField.value;
    const clothingCost = parseFloat(getClothesFieldText);

    //Calculate Total Expense Amount
    const errorMsg = document.getElementById('error-msg');
    if (foodCost < 0 || rentCost < 0 || clothingCost < 0) {
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
    }
    totalExpensesAmount = foodCost + rentCost + clothingCost;
    const expensesAmount = document.getElementById('expenses-amount');
    // const expensesAmountText = expensesAmount.innerText;
    expensesAmount.innerText = totalExpensesAmount;

    //Calculate Balance
    const Balance = document.getElementById('total-balance');
    const totalBalance = Balance.innerText;
    Balance.innerText = getIncome() - totalExpensesAmount;
    return totalBalance;
}

document.getElementById('calculate-btn').addEventListener('click', function() {
    catchBalance();
})

//Add Click Handler to save button
document.getElementById('save-btn').addEventListener('click', function() {
    const saveField = document.getElementById('saving-field');
    const getSaveFieldText = saveField.value;
    const savaing = parseFloat(getSaveFieldText)
    const savingAmmount = document.getElementById('saving-ammount');
    // let savingAmmountText = savingAmmount.innerText;
    savingAmmount.innerText = (savaing / 100) * getIncome();

    //Calculate Net Remaining Balance
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = catchBalance() - savingAmmount.innerText;
    netRemainingBalance = remainingBalance.innerText;
});