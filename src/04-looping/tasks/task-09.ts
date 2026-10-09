/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];
let A: number = 0;
let B: number = 0;
let C: number = 0;
let D: number = 0;
let highestScore: number = students[0].score;
let lowestScore: number = students[0].score;
let totalScore: number = 0;
for (let i=0; i<8; i++) {
  totalScore += students[i].score;
  if (students[i].score >= 90) {
    A++;
  } else if (students[i].score >= 80){
    B++;
  } else if (students[i].score >= 70){
    C++;
  } else {
    D++;
  }
  if (students[i].score > highestScore){
    highestScore = students[i].score;
  }
  if (students[i].score < lowestScore){
    lowestScore = students[i].score;
  }
}


const averagescore= totalScore/8;
console.log(`A students: ${A}`);
console.log(`B students: ${B}`);
console.log(`C students: ${C}`);
console.log(`D students: ${D}`);
console.log(`highest score: ${highestScore}`);
console.log(`lowest score: ${lowestScore}`);
console.log(`average score: ${averagescore.toFixed(2)}`);