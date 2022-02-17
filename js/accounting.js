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

    // Error Handler (positive number)
    const errorMsg = document.getElementById('error-msg');
    if (foodCost < 0 || foodCost == "" ||
        rentCost < 0 || rentCost == "" ||
        clothingCost < 0 || clothingCost == "") {
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';

        //Calculate Total Expense Amount
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
//Click handler for calculate button
document.getElementById('calculate-btn').addEventListener('click', function() {
        catchBalance();
        // Error Handler (increase income)
        if (getIncome() > totalExpensesAmount) {


        } else {
            alert("Please increase your income")
            return totalExpensesAmount;
        }
    })
    // click handler for save button
function saveCalculateBtn() {
    const saveField = document.getElementById('saving-field');
    const savingAmmount = document.getElementById('saving-ammount');
    const remainingBalance = document.getElementById('remaining-balance');
    // Error Handler (positive number)
    if (
        saveField.value < 0 ||
        saveField.value == ""
    ) {
        alert("Please enter positive valid number")
        return;
    }
    const savePercent = getIncome() * (parseFloat(saveField.value) / 100);
    savingAmmount.innerText = savePercent;
    const totalBalance = getIncome() - totalExpensesAmount;
    // Error Handler (Not enough balance)
    if (totalBalance > savePercent) {
        const totalBalance = getIncome() - totalExpensesAmount;
        remainingBalance.innerText = totalBalance - savePercent;
    } else {

        alert("Not enough balance")
        return;
    }
}