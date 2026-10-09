/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];
let present: number = 0;
let absent: number = 0;
const absentstudents: string[] = [];
for (let i=0; i<8; i++) {
  if (attendances[i].present){
    present++;
  } else{
    absent++;
    absentstudents.push(attendances[i].name);
  }
}


const attendancepercentage: number =(present/8) * 100;
console.log(`present students: ${present}`);
console.log(`absent students: ${absent}`);
console.log(`name of absent students: ${absentstudents.join(", ")}`);
console.log(`attendance percentage: ${attendancepercentage.toFixed(2)}%`);