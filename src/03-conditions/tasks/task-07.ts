/**
 * A bank evaluates loan applications using the following policy.
 * First Screening
 * Applicants must satisfy both requirements:
 * - Monthly income is at least Rp8,000,000
 * - Credit score is at least 700
 * If they pass the first screening, continue to the second screening.
 * 
 * Second Screening
 * - Existing debt must not exceed 30% of monthly income.
 * - Employment status must be permanent.
 * 
 * 
 * Decision Rules:
 * - Pass both screenings → Loan Approved
 * - Pass first screening only → Manual Review
 * - Fail first screening → Loan Rejected
 * 
 * Today's applicant:
 * | Information        | Value       |
 * | ------------------ | ----------- |
 * | Applicant          | Andi Wijaya |
 * | Monthly Income     | 10000000    |
 * | Credit Score       | 725         |
 * | Existing Debt      | 2500000     |
 * | Permanent Employee | Yes         |
 * 
 * Student Tasks:
 * 1. Declare all variables.
 * 2. Implement both screening stages.
 * 3. Display the loan decision.
 */

const applicant: string = "Sugeng raharjo";
const monthlyIncome: number = 12000000;
const CreditScore: number = 800;
const debt: number = 3500000;
const permanentEmployee: boolean = true;


let rEsult: string;

if (monthlyIncome >=8000000 && CreditScore >= 700) {
    rEsult = `${applicant}, you have passed the first screening, mantab`;
    if (debt <=monthlyIncome * 0.3 && permanentEmployee) {
        rEsult = `${applicant}, your loan is approved sipp`;
    } else {
         rEsult = `${applicant}, you only passed the first screening, so you get Manual Review yea`;
    }
} else {
    rEsult = `yaaah ${applicant}, you failed the first screening`;
}

console.log(rEsult);