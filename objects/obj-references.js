let myAccount = {
    name: 'benedict mwendwa',
    expenses:0,
    income:0
}
let addExpense = function(account,amount){
    account.expenses = account.expenses + amount
    console.log(account)
}
addExpense(myAccount,5000)
// console.log(myAccount)

// challenge

// add income --> account ,income
let addIncome = function(account,income)
{
    account.income += income
    return account.income
}

// reset account --> account
let resetAccount = function(account)
{
    account.income = 0
    account.expenses = 0
}

// get account summary
let accountSummary = function(account)
{
    return `account for ${account.name} has ${account.income - account.expenses}. ${account.income} in income. ${account.expenses} in expenses`
}

addIncome(myAccount,50000)
// resetAccount(myAccount)
console.log(accountSummary(myAccount))