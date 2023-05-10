const bankAmount = 5000;
const VAT = 0.17;
let expenses = ["+200", "-100", "+146", "+167", "-2900"];

for(let i = 0; i < expenses.length; i++) {
  let expense = parseFloat(expenses[i]);
  if(expense > 0) {
    expenses[i] = "+" + (expense + (expense * VAT)).toFixed(2);
  } else {
    expenses[i] = (expense + (expense * VAT)).toFixed(2);
  }
}

let totalExpenses = 0;
for(let i = 0; i < expenses.length; i++) {
  totalExpenses += parseFloat(expenses[i]);
}

const bankStanding = bankAmount + totalExpenses;

console.log("Expenses with VAT:", expenses);
console.log("Bank standing:", bankStanding.toFixed(2));