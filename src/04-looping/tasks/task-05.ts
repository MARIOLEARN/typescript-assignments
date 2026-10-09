/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let goldMedal: number=0;
let silverMedal: number=0;
let bronzeMedal: number=0;
let noMedal: number=0;
let totalScore: number=0;
for (let i=0; i<20; i++) {
  totalScore += scores[i];
  if (scores[i] >=95){
    goldMedal++;
  } else if (scores[i]>=85){
    silverMedal++;
  } else if (scores[i] >=75)  {
    bronzeMedal++;
  } else {
    noMedal++;
  }
}
const averagenya: number=totalScore/20;
console.log(`gold medal winners: ${goldMedal}`);
console.log(`silver medal winners: ${silverMedal}`);
console.log(`bronze medal winners: ${bronzeMedal}`);
console.log(`students not earn Medal: ${noMedal}`);
console.log(`average competition score: ${averagenya}`);