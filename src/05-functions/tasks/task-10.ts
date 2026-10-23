/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];


type Enrollment = {
    student: string;
    course: string;
    completed: boolean;
    score: number;
    duration: number;
}
 
type DashboardData = {
    totalEnrollments: number;
    completedEnrollments: number;
    incompleteEnrollments: number;
    completionPercentage: number;
    highestScore: number;
    lowestScore: number;
    averageScore: number;
    passingStudents: number;
    enrolledByCourse: Record<string, number>;
    averageScoreByCourse: Record<string, number>;
    totalLearningHours: number;
    averageLearningDuration: number;
}
 
const PASSING_SCORE = 75;
function getScores(enrollments: Enrollment[]): number[] {
    return enrollments.map(e => e.score);
}
 
function getDurations(enrollments: Enrollment[]): number[] {
    return enrollments.map(e => e.duration);
}
 
function calculateSum(values: number[]): number {
    return values.reduce((sum, value) => sum + value, 0);
}
 
function calculateAverage(total: number, count: number): number {
    return count > 0 ? total / count : 0;
}
 
function formatDecimal(value: number, digits: number = 2): string {
    return value.toFixed(digits);
}
 
function countTotalEnrollments(enrollments: Enrollment[]): number {
    return enrollments.length;
}
 
function countCompletedEnrollments(enrollments: Enrollment[]): number {
    return enrollments.filter(e => e.completed).length;
}
 
function countIncompleteEnrollments(totalEnrollments: number, completedEnrollments: number): number {
    return totalEnrollments - completedEnrollments;
}
 
function calculateCompletionPercentage(completedEnrollments: number, totalEnrollments: number): number {
    return totalEnrollments > 0 ? (completedEnrollments / totalEnrollments) * 100 : 0;
}

function findHighestScore(scores: number[]): number {
    return scores.length > 0 ? Math.max(...scores) : 0;
}
 
function findLowestScore(scores: number[]): number {
    return scores.length > 0 ? Math.min(...scores) : 0;
}
 
function countPassingStudents(scores: number[]): number {
    return scores.filter(score => score >= PASSING_SCORE).length;
}
 
function groupEnrollmentsByCourse(enrollments: Enrollment[]): Record<string, Enrollment[]> {
    const groups: Record<string, Enrollment[]> = {};
    for (const enrollment of enrollments) {
        if (!groups[enrollment.course]) {
            groups[enrollment.course] = [];
        }
        groups[enrollment.course].push(enrollment);
    }
    return groups;
}
 
function countEnrollmentsByCourse(groups: Record<string, Enrollment[]>): Record<string, number> {
    const result: Record<string, number> = {};
    for (const [course, list] of Object.entries(groups)) {
        result[course] = list.length;
    }
    return result;
}
 
function calculateAverageScoreByCourse(groups: Record<string, Enrollment[]>): Record<string, number> {
    const result: Record<string, number> = {};
    for (const [course, list] of Object.entries(groups)) {
        const scores = getScores(list);
        result[course] = calculateAverage(calculateSum(scores), scores.length);
    }
    return result;
}
 
function generateDashboardData(enrollments: Enrollment[]): DashboardData {
    const totalEnrollments = countTotalEnrollments(enrollments);
    const completedEnrollments = countCompletedEnrollments(enrollments);
    const scores = getScores(enrollments);
    const durations = getDurations(enrollments);
    const totalLearningHours = calculateSum(durations);
    const groups = groupEnrollmentsByCourse(enrollments);
 
    return {
        totalEnrollments,completedEnrollments,
        incompleteEnrollments: countIncompleteEnrollments(totalEnrollments, completedEnrollments),
        completionPercentage: calculateCompletionPercentage(completedEnrollments, totalEnrollments),
        highestScore: findHighestScore(scores),
        lowestScore: findLowestScore(scores),
        averageScore: calculateAverage(calculateSum(scores), scores.length),
        passingStudents: countPassingStudents(scores),
        enrolledByCourse: countEnrollmentsByCourse(groups),
        averageScoreByCourse: calculateAverageScoreByCourse(groups),
        totalLearningHours,
        averageLearningDuration: calculateAverage(totalLearningHours, durations.length)
    };
}
 
function printCompletionStatistics(data: DashboardData): void {
    console.log("=== COMPLETION STATISTICS ===");
    console.log(`Total enrollments: ${data.totalEnrollments}`);
    console.log(`Completed enrollments: ${data.completedEnrollments}`);
    console.log(`Incomplete enrollments: ${data.incompleteEnrollments}`);
    console.log(`Completion percentage: ${formatDecimal(data.completionPercentage)}%`);
}
 
function printAcademicStatistics(data: DashboardData): void {
    console.log("=== ACADEMIC STATISTICS ===");
    console.log(`Highest score: ${data.highestScore}`);
    console.log(`Lowest score: ${data.lowestScore}`);
    console.log(`Average score: ${formatDecimal(data.averageScore)}`);
    console.log(`Students with passing scores: ${data.passingStudents}`);
}
 
function printCourseStatistics(data: DashboardData): void {
    console.log("=== COURSE STATISTICS ===");
    for (const [course, enrolled] of Object.entries(data.enrolledByCourse)) {
        const average = formatDecimal(data.averageScoreByCourse[course]);
        console.log(`${course}: ${enrolled} students, average score ${average}`);
    }
}
 
function printLearningStatistics(data: DashboardData): void {
    console.log("=== LEARNING STATISTICS ===");
    console.log(`Total learning hours: ${data.totalLearningHours}`);
    console.log(`Average learning duration: ${formatDecimal(data.averageLearningDuration)} hours`);
}
 
function printDashboard(data: DashboardData): void {
    printCompletionStatistics(data);
    console.log("");
    printAcademicStatistics(data);
    console.log("");
    printCourseStatistics(data);
    console.log("");
    printLearningStatistics(data);
}


const dashboardData = generateDashboardData(enrollments);
printDashboard(dashboardData);