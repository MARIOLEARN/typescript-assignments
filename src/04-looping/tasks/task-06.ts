/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];


let outOfStock: number = 0;
let lowStock: number = 0;
let safeStock: number = 0;
let totalInventory: number = 0;
for (let i=0; i<15; i++) {
  totalInventory += stocks[i];
  if (stocks[i] === 0){
    outOfStock++;
  } else if (stocks[i] <10){
    lowStock++;
  } else{
    safeStock++;
  }
}

const averagenyastock: number = totalInventory /15;
console.log(`out of stock products: ${outOfStock}`);
console.log(`low stock products: ${lowStock}`);
console.log(`safe stock products: ${safeStock}`);
console.log(`total inventory: ${totalInventory}`);
console.log(`average stock: ${averagenyastock}`);