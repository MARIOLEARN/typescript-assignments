/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */

const StudentName = "Alya Putri";
const gpa = 3.89;
const familyIncome = 4200000;
const competitionCount = 4;
const hasDisciplinaryRecord = false;
const documentsComplete = true;
const totalScholarshipBudget = 500000000;

let gpaRequirement = gpa >= 3.75;
let incomeRequirement = familyIncome < 5000000;
let competitionRequirement = competitionCount >= 3;
let disciplinaryRequirement = hasDisciplinaryRecord === false;
let documentRequirement = documentsComplete === true;
let isAccepted =
    gpaRequirement &&
    incomeRequirement &&
    competitionRequirement &&
    disciplinaryRequirement &&
    documentRequirement;
let scholarshipAmount = isAccepted ? 12000000 : 0;
let remainingBudget = totalScholarshipBudget - scholarshipAmount;

console.log("Student Name:", StudentName);
console.log("GPA Requirement:", gpaRequirement);
console.log("Income Requirement:", incomeRequirement);
console.log("Competition Requirement:", competitionRequirement);
console.log("No Disciplinary Record:", disciplinaryRequirement);
console.log("Documents Complete:", documentRequirement);
console.log("Accepted:", isAccepted);
console.log("Scholarship Amount:", scholarshipAmount);
console.log("Remaining Scholarship Budget:", remainingBudget);