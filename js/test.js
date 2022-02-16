function getIncome() {
    const incomeField = document.getElementById('income-field');
    let getIncomeField = parseFloat(incomeField.value);
    return getIncomeField;
};

document.getElementById('calculate-button').addEventListener('click', function() {
    const foodField = document.getElementById('food-field');
    const getFoodField = foodField.value;
    const rentField = document.getElementById('rent-field');
    const getRentField = rentField.value;
    const clothesField = document.getElementById('clothes-field');
    const getClothesField = clothesField.value;

    //Calculate Expense Amount
    const expensesAmount = document.getElementById('expenses-amount');
    expensesAmount.innerText = parseFloat(getFoodField) + parseFloat(getRentField) + parseFloat(getClothesField);

    //Calculate Balance Amount
    const remainingBalance = document.getElementById('balance-amount');
    remainingBalance.innerText = getIncome() - expensesAmount.innerText;
});