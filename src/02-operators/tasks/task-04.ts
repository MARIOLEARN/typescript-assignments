/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const keyboardPrice = 850000;
const keyboardQuantity = 1;
const mousePrice = 275000;
const mouseQuantity = 2;
const mousePadPrice = 120000;
const mousePadQuantity = 1;
const isPremium = true;

let subtotal = 
    (keyboardPrice * keyboardQuantity) +
    (mousePrice * mouseQuantity) +
    (mousePadPrice * mousePadQuantity);
let totalItems = 0;
for (let i = 0; i < keyboardQuantity; i++) {
    totalItems++;
}

for (let i = 0; i < mouseQuantity; i++) {
    totalItems++;
}
for (let i = 0; i < mousePadQuantity; i++) {
    totalItems++;
}
let Discount = subtotal > 1000000 ? subtotal * 0.10 : 0;
let shipping = isPremium ? 0 : 50000;
let FinalPayment = subtotal - discount + shipping;



console.log("Subtotal:", subtotal);
console.log("Total Items:", totalItems);
console.log("Discount:", discount);
console.log("Shipping:", shipping);
console.log("Final Payment:", finalPayment);