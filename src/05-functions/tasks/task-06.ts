/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]): number {
return sales.reduce((total, transaction) => total + transaction, 0);
}

function findHighestTransaction(sales: number[]): number {
return sales.reduce((highest, transaction) => (transaction > highest ? transaction : highest), sales[0]);
}

function findLowestTransaction(sales: number[]): number {
return sales.reduce((lowest, transaction) => (transaction < lowest ? transaction : lowest), sales[0]);
}

function calculateAverageSale(sales: number[]): number {
const total = calculateTotalSales(sales);
return total / sales.length;
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
return sales.filter(transaction => transaction > minimumAmount).length;
}

console.log("==== Daily Sales Dashboard ===");
console.log("Total Sales:", calculateTotalSales(sales));
console.log("Highest Transaction:", findHighestTransaction(sales));
console.log("Lowest Transaction:", findLowestTransaction(sales));
console.log("Average Sale:", calculateAverageSale(sales));
console.log("Number of Transactions Above Rp500,000:", countLargeTransactions(sales, 500000));
