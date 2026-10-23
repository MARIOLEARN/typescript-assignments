/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
const attendances: Attendance[] = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

type Attendance = {
    name: string;
    present: boolean;
};

function printAttendanceReport(attendances: Attendance[]): void {
    let totalPresent = 0;
    let totalAbsent = 0;
    const absentStudents: string[] = [];

    for (const student of attendances) {
        if (student.present) {
            totalPresent++;
        } else {
            totalAbsent++;
            absentStudents.push(student.name);
        }
    }

    console.log("Attendance Report:");
    console.log(`Total Present: ${totalPresent}`);
    console.log(`Total Absent: ${totalAbsent}`);
    console.log("Names of Absent Students:");
    for (const name of absentStudents) {
        console.log(`- ${name}`);
    }
}

printAttendanceReport(attendances);