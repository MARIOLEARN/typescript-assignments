/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */
const sales: number[]= [
  125000,
  350000,
  78000,
  910000,
  150000,
  420000,
  275000,
  99000,
  640000,
  18000
  ]
  let totalSales: number=0
  let highestTransaction: number=0
  let lowestTransaction: number=0
  let transactionsBiggerThan300000: number=0


for (let i=0; i<10; i++){
  totalSales += sales[i];
  if (sales[i] > highestTransaction){
    highestTransaction = sales[i];
  } else if (sales[i] < lowestTransaction){
    lowestTransaction = sales[i];
  }
  if (sales[i] >= 300000)  {
   transactionsBiggerThan300000++;
  }
}
const averageTransaction: number=totalSales/10;
console.log(`total sales revenue: ${totalSales}`);
console.log(`highest transaction: ${highestTransaction}`);
console.log(`lowest transaction: ${lowestTransaction}`);
console.log(`transactions that are bigger than 300000: ${transactionsBiggerThan300000}`);
console.log(`average transaction value: ${averageTransaction}`);