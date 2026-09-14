/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */
const sTudentName: string = "Zidan Almer";
const GPA: number = 3.97;
const fAmilyIncome: number = 3500000;
const cOmpetitionCount: number = 5;
const disciplinaryViolation: boolean = false;
const dOcumentsComplete: boolean = true;
const passedSecondScreening: boolean = (cOmpetitionCount >=3 && !disciplinaryViolation && dOcumentsComplete)

let Resultnya: string;


if (GPA >=3.75 && fAmilyIncome <5000000) {
     Resultnya = `${sTudentName}, you have passed the first screening`;
 if (passedSecondScreening) {
    Resultnya = `${sTudentName}, scholarship Approved`;
} else {
    Resultnya = `${sTudentName}, you Passed first screening but failed second screening`;
}  } else {
    Resultnya = `${sTudentName}, you failed first screening`;
}

console.log(Resultnya);