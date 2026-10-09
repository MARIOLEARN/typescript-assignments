/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];
let doneSubmit: number = 0;
let notSubmit: number = 0;
let notSubmitName: string[]=[];
let reviseName: string[]=[];
let totalScore: number = 0;
let pass: number = 0;
let revise: number = 0;
for (let i=0; i<8; i++) {
  totalScore += submissions[i].score;
  if (submissions[i].submitted){
    doneSubmit++;
    if (submissions[i].score >= 75) {
      pass++;
    } else   {
      revise++;
      reviseName.push(submissions[i].student);
    }
  } else   {
    notSubmit++;
    notSubmitName.push(submissions[i].student);
  }
}


const classaverage =totalScore/8;
console.log(`students submitted: ${doneSubmit}`);
console.log(`students did not submit: ${notSubmit}`);
console.log(`students passed: ${pass}`);
console.log(`students must revise: ${revise}`);
console.log(`class average score: ${classaverage.toFixed(2)}`);
console.log(`name of students did not submit: ${notSubmitName.join(",")}`);
console.log(`name of students must revise: ${reviseName.join(",")}`);