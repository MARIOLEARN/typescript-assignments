/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const scores: number[] = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

function findHighestScore(scores: number[]): number {
let highest = scores[0];
for (const score of scores) {
    if (score > highest) {
        highest = score;
    }
}
return highest;
}

function findLowestScore(scores: number[]): number {
let lowest = scores[0];
for (const score of scores) {
    if (score < lowest) {
        lowest = score;
    }
}
return lowest;
}

function calculateAverage(scores: number[]): number {
    let sum = 0;
    for (const score of scores) {
        sum += score;
    }
    return sum / scores.length;
}

function countPassedStudents(scores: number[]): number {
    let count = 0;
    for (const score of scores) {
        if (score >= 75) {
            count++;
        }
    }
    return count;
}

console.log(`Highest Score: ${findHighestScore(scores)}`);
console.log(`Lowest Score: ${findLowestScore(scores)}`);
console.log(`Average Score: ${calculateAverage(scores)}`);
console.log(`Number of Passed Students: ${countPassedStudents(scores)}`);