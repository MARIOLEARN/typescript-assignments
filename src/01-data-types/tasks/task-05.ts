/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Attendance = {
  employeeId: string;
  employeeName: string;
  date: string;
  checkInTime: string;
  checkOutTime: string;
  totalWorkingHours: number;
  isPresent: boolean;
};

const attendance1: Attendance = {
  employeeId: "tkj001",
  employeeName: "faiz",
  date: "2026-08-18",
  checkInTime: "07:30",
  checkOutTime: "18:30",
  totalWorkingHours: 8.75,
  isPresent: true,
};

const attendance2: Attendance = {
  employeeId: "tkj002",
  employeeName: "dekka",
  date: "2026-08-18",
  checkInTime: "08:34",
  checkOutTime: "18:00",
  totalWorkingHours: 7.50,
  isPresent: true,
};

const attendance3: Attendance = {
  employeeId: "tkj003",
  employeeName: "sunit",
  date: "2026-08-18",
  checkInTime: "-",
  checkOutTime: "-",
  totalWorkingHours: 0,
  isPresent: false,
};

console.log("Attendance 1 :", attendance1);
console.log("Attendance 2 :", attendance2);
console.log("Attendance 3 :", attendance3);