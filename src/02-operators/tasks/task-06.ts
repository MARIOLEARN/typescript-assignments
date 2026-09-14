/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const hours = 7;
const minutes = 35;
const ratePerHour = 8000;
const totalPlayingMinutes = (hours * 60) + minutes;

let remainingMinutes = totalPlayingMinutes % 60;
let billedHours = Math.ceil(totalPlayingMinutes / 60);
let totalPaymentBeforeDiscount = billedHours * ratePerHour;
let disCount = billedHours > 5 ? totalPaymentBeforeDiscount * 0.15 : 0;
let finalpayment = totalPaymentBeforeDiscount - discount;




console.log("Total Playing Time (minutes):", totalPlayingMinutes);
console.log("Remaining Minutes:", remainingMinutes);
console.log("Total Billed Hours:", billedHours);
console.log("Total Payment Before Discount:", totalPaymentBeforeDiscount);
console.log("Discount Amount:", discount);
console.log("Final Payment:", finalPayment);
