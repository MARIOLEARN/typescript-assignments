/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

 type student = {
    fullname: string;
    studentid: string;
    age: number;
    active: boolean;
 }

 const student1: student = {
    fullname: "Raditya pratama",
    studentid: "ITY12345",
    age: 16,
    active: true,
 }

 const student2: student = {
    fullname: "Agustinus Yare",
    studentid: "RPL12345",
    age: 17,
    active: true,
 }

 const student3: student = {
    fullname: "Budi santoso",
    studentid: "TKJ12345",
    age: 16,
    active: false,
 }

 console.log(student1);
 console.log(student2);
 console.log(student3);