/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

const employeeName = "Dimas";
const basicSalary = 5000000;
const overtimeHours = 12;
const overtimeRate = 50000;

let overtimePay = overtimeHours * overtimeRate;

let bonus = overtimeHours > 10 ? 300000 : 0;

let finalSalary = basicSalary + overtimePay + bonus;

console.log("Employee Name:", employeeName);
console.log("Overtime Pay:", overtimePay);
console.log("Bonus:", bonus);
console.log("Final Salary:", finalSalary);