/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];
const readyToShiporder: string[] = [];
let readytoShip: number = 0;
let unpaid: number = 0;
let waitingForstock: number = 0;
for (let i=0; i<6; i++) {
  if (orders[i].paid && orders[i].stockAvailable){
    readytoShip++;
    readyToShiporder.push(orders[i].id);
  }
  if (!orders[i].paid){
    unpaid++;
  }
  if (!orders[i].stockAvailable){
    waitingForstock++;
  }
}


console.log(`ready to ship orders: ${readytoShip}`);
console.log(`unpaid orders: ${unpaid}`);
console.log(`waiting for stock: ${waitingForstock}`);
console.log(`order IDs ready to ship: ${readyToShiporder.join(",")}`);