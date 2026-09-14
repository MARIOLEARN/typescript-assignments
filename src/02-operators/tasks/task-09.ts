/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const keyboardPrice = 850000;
const keyboardQty = 1;
const mousePrice = 275000;
const mouseQty = 2;
const monitorStandPrice = 420000;
const monitorStandQty = 1;
const voucherValue = 100000;
const isPremiumMember = true;
const vatRate = 0.11;
const pointRate = 50000;
const subtotal =
  keyboardPrice * keyboardQty +
  mousePrice * mouseQty +
  monitorStandPrice * monitorStandQty;
const membershipDiscount = isPremiumMember ? subtotal * 0.1 : 0;
const afterMembershipDiscount = subtotal - membershipDiscount;
const afterVoucher = afterMembershipDiscount - voucherValue;
const paymentBeforeTax = afterVoucher;
const vat = paymentBeforeTax * vatRate;
const finalPayment = paymentBeforeTax + vat;
const rewardPoints = Math.floor(paymentBeforeTax / pointRate);
const isFreeShippingEligible = isPremiumMember || paymentBeforeTax > 1500000;



console.log("Product Subtotal:", subtotal);
console.log("Membership Discount:", membershipDiscount);
console.log("Voucher Deduction:", voucherValue);
console.log("Payment Before Tax:", paymentBeforeTax);
console.log("VAT:", vat);
console.log("Final Payment:", finalPayment);
console.log("Reward Points:", rewardPoints);
console.log("Free Shipping Eligibility:", isFreeShippingEligible);