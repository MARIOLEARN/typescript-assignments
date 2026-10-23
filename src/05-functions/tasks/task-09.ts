/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients: Patient[] = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];



type Patient = {
    id: string;
    name: string;
    age: number;
    department: string;
    admitted: boolean;
    bill: number;
}
 
type HospitalReport = {
    totalPatients: number;
    admittedCount: number;
    dischargedCount: number;
    byDepartment: Record<string, number>;
    highestBill: number;
    lowestBill: number;
    averageBill: number;
    totalRevenue: number;
    admittedNames: string[];
}
 
 
function countTotalPatients(patients: Patient[]): number {
    return patients.length;
}
 
function getAdmittedPatients(patients: Patient[]): Patient[] {
    return patients.filter(p => p.admitted);
}
 
function countDischargedPatients(totalPatients: number, admittedCount: number): number {
    return totalPatients - admittedCount;
}
 
function countPatientsByDepartment(patients: Patient[]): Record<string, number> {
    const result: Record<string, number> = {};
    for (const p of patients) {
        result[p.department] = (result[p.department] ?? 0) + 1;
    }
    return result;
}
 
function findHighestBill(patients: Patient[]): number {
    return patients.length > 0 ? Math.max(...patients.map(p => p.bill)) : 0;
}
 
function findLowestBill(patients: Patient[]): number {
    return patients.length > 0 ? Math.min(...patients.map(p => p.bill)) : 0;
}
 
function calculateTotalRevenue(patients: Patient[]): number {
    return patients.reduce((sum, p) => sum + p.bill, 0);
}
 
function calculateAverageBill(totalRevenue: number, totalPatients: number): number {
    return totalPatients > 0 ? totalRevenue / totalPatients : 0;
}
 
function getAdmittedPatientNames(admittedPatients: Patient[]): string[] {
    return admittedPatients.map(p => p.name);
}
 
function generateReportData(patients: Patient[]): HospitalReport {
    const totalPatients = countTotalPatients(patients);
    const admittedPatients = getAdmittedPatients(patients);
    const totalRevenue = calculateTotalRevenue(patients);
 
    return {
        totalPatients,
        admittedCount: admittedPatients.length,
        dischargedCount: countDischargedPatients(totalPatients, admittedPatients.length),
        byDepartment: countPatientsByDepartment(patients),
        highestBill: findHighestBill(patients),
        lowestBill: findLowestBill(patients),
        averageBill: calculateAverageBill(totalRevenue, totalPatients),
        totalRevenue,
        admittedNames: getAdmittedPatientNames(admittedPatients)
    };
}
 
function printHospitalReport(report: HospitalReport): void {
    console.log(`Total patients: ${report.totalPatients}`);
    console.log(`Total admitted patients: ${report.admittedCount}`);
    console.log(`Total discharged patients: ${report.dischargedCount}`);
    console.log("Patients per department:");
    for (const [dept, count] of Object.entries(report.byDepartment)) {
        console.log(`  - ${dept}: ${count}`);
    }
    console.log(`Highest hospital bill: ${report.highestBill}`);
    console.log(`Lowest hospital bill: ${report.lowestBill}`);
    console.log(`Average hospital bill: ${report.averageBill}`);
    console.log(`Total hospital revenue: ${report.totalRevenue}`);
    console.log(`Names of admitted patients: ${report.admittedNames.join(", ")}`);
}
 
const report = generateReportData(patients);
printHospitalReport(report);
