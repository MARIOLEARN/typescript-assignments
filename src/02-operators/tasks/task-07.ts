/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const roomPricePerNight = 650000;
const nightsStayed = 4;
const serviceCharge = 120000;
const taxRate = 0.11;
const isVip = true;

let roomSubtotal = roomPricePerNight * nightsStayed;
let discount = isVip ? roomSubtotal * 0.12 : 0;
let discountedRoomTotal = roomSubtotal - discount;
let tax = discountedRoomTotal * taxRate;
let finalPayment = discountedRoomTotal + serviceCharge + tax;
let freeBreakfast = nightsStayed >= 3 || isVip;





console.log("Room Subtotal:", roomSubtotal);
console.log("Discount:", discount);
console.log("Tax:", tax);
console.log("Final Payment:", finalPayment);
console.log("Free Breakfast:", freeBreakfast);