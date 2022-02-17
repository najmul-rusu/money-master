function getIncome() {
    const incomeField = document.getElementById('income-field');
    let getIncomeFieldText = incomeField.value;
    let TotalIncome = parseFloat(getIncomeFieldText);
    return TotalIncome;
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
}
document.getElementById('calculate-btn').addEventListener('click', function() {
    catchBalance();
    // Error Handling
    if (getIncome() > totalExpensesAmount) {} else {
        alert("Please increase your income")
        return;
    }
})

function saveCalculateBtn() {
    const saveField = document.getElementById('saving-field');
    const savingAmmount = document.getElementById('saving-ammount');
    const remainingBalance = document.getElementById('remaining-balance');
    if (
        saveField.value < 0
    ) {
        alert("Please enter positive valid number")
        return;
    }
    const savePercent = getIncome() * (parseFloat(saveField.value) / 100);
    savingAmmount.innerText = savePercent;
    const totalBalance = getIncome() - totalExpensesAmount;

    if (totalBalance > savePercent) {
        const totalBalance = getIncome() - totalExpensesAmount;
        remainingBalance.innerText = totalBalance - savePercent;
    } else {

        alert("Not enough balance")
        return;
    }
}