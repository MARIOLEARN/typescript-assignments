/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];



type Student = {
    name: string;
    major: string;
    active: boolean;
}
 
type EnrollmentReport = {
    totalStudents: number;
    activeStudents: number;
    inactiveStudents: number;
    softwareEngineering: number;
    networking: number;
    multimedia: number;
}
 
function countTotalStudents(students: Student[]): number {
    return students.length;
}
 
function countActiveStudents(students: Student[]): number {
    return students.filter(s => s.active).length;
}
 
function countInactiveStudents(totalStudents: number, activeStudents: number): number {
    return totalStudents - activeStudents;
}
 
function countStudentsByMajor(students: Student[], major: string): number {
    return students.filter(s => s.major === major).length;
}
 
function generateReportData(students: Student[]): EnrollmentReport {
    const totalStudents = countTotalStudents(students);
    const activeStudents = countActiveStudents(students);
 
    return {
        totalStudents,activeStudents,
        inactiveStudents: countInactiveStudents(totalStudents, activeStudents),
        softwareEngineering: countStudentsByMajor(students, "Software Engineering"),
        networking: countStudentsByMajor(students, "Networking"),
        multimedia: countStudentsByMajor(students, "Multimedia")
    };
}

function printEnrollmentReport(report: EnrollmentReport): void {
    console.log(`Total students: ${report.totalStudents}`);
    console.log(`Active students: ${report.activeStudents}`);
    console.log(`Inactive students: ${report.inactiveStudents}`);
    console.log(`Software Engineering students: ${report.softwareEngineering}`);
    console.log(`Networking students: ${report.networking}`);
    console.log(`Multimedia students: ${report.multimedia}`);
}
 
const report = generateReportData(students);
printEnrollmentReport(report);
 
