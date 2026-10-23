/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];




type Submission = {
    student: string;
    submitted: boolean;
    score: number;
};
 
type AssignmentReport = {
    totalStudents: number;
    submittedCount: number;
    missingCount: number;
    passedCount: number;
    revisionCount: number;
    averageScore: number;
    highestScore: number;
    lowestScore: number;
}
 
const PASSING_SCORE = 75;
 
function countTotalStudents(submissions: Submission[]): number {
    return submissions.length;
}
 
function countSubmittedAssignments(submissions: Submission[]): number {
    return submissions.filter(s => s.submitted).length;
}
 
function countMissingAssignments(totalStudents: number, submittedCount: number): number {
    return totalStudents - submittedCount;
}
 
function countPassedStudents(submissions: Submission[]): number {
    return submissions.filter(s => s.submitted && s.score >= PASSING_SCORE).length;
}
 
function countStudentsRequiringRevision(submissions: Submission[]): number {
    return submissions.filter(s => s.submitted && s.score < PASSING_SCORE).length;
}
 
function getEffectiveScores(submissions: Submission[]): number[] {
    return submissions.map(s => (s.submitted ? s.score : 0));
}
 
function calculateAverageScore(scores: number[]): number {
    if (scores.length === 0) return 0;
    return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}
 
function findHighestScore(scores: number[]): number {
    return scores.length > 0 ? Math.max(...scores) : 0;
}
 
function findLowestScore(scores: number[]): number {
    return scores.length > 0 ? Math.min(...scores) : 0;
}
 
function generateReportData(submissions: Submission[]): AssignmentReport {
    const totalStudents = countTotalStudents(submissions);
    const submittedCount = countSubmittedAssignments(submissions);
    const scores = getEffectiveScores(submissions);
 
    return {
        totalStudents, submittedCount,
        missingCount: countMissingAssignments(totalStudents, submittedCount),
        passedCount: countPassedStudents(submissions),
        revisionCount: countStudentsRequiringRevision(submissions),
        averageScore: calculateAverageScore(scores),
        highestScore: findHighestScore(scores),
        lowestScore: findLowestScore(scores)
    };
}
 
function printAssignmentReport(report: AssignmentReport): void {
    console.log(`Total students: ${report.totalStudents}`);
    console.log(`Submitted assignments: ${report.submittedCount}`);
    console.log(`Missing assignments: ${report.missingCount}`);
    console.log(`Passed students: ${report.passedCount}`);
    console.log(`Students requiring revision: ${report.revisionCount}`);
    console.log(`Average score: ${report.averageScore}`);
    console.log(`Highest score: ${report.highestScore}`);
    console.log(`Lowest score: ${report.lowestScore}`);
}
 
const report = generateReportData(submissions);
printAssignmentReport(report);
 