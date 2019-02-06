let myAccount = {
    name: 'benedict mwendwa',
    expenses: [],
    incomes: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            'description': description,
            'amount': amount
        })
    },
    addIncome: function (description, amount) {
        this.incomes.push({
            'description': description,
            'amount': amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        //for expense in every expense.amount in expenses object
        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount
        })
        this.incomes.forEach(function (income) {
            totalIncome += income.amount
        })
        let balance = totalIncome - totalExpenses

        return `${this.name} has a balance of ${balance}, ${totalIncome} in income and ${totalExpenses} in expenses.`

    }

}

// Expenses --> description, amount
// addExpense --> description, amount save to expenses
// getAccountSummary -->total up all expenses
//  andrew mead has 146559 in expenses 

// Income --> description, amount
// adIncome --> description, amount of income
// getAccountSummary -->total up all expenses and all income then return balance
//  andrew mead has 146559 in expenses 


myAccount.addExpense('rent', 950)
myAccount.addIncome('andela', 47150)
console.log(myAccount.getAccountSummary())