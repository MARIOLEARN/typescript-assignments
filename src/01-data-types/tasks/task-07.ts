/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type registration = {
    studentId: string;
    fullName: string;
    gradeLevel: string;
    courseId: string;
    courseTitle: string;
    instructorName: string;
    registrationDate: string;
    paymentCompleted: boolean;
}

const registration1: registration = {
    studentId: "tuc12345",
    fullName: "BudiWiyanto",
    gradeLevel: "X",
    courseId: "tuc123456",
    courseTitle: "pulauKapuk",
    instructorName: "herdiSumanto",
    registrationDate: "10August",
    paymentCompleted: true,
}

const registration2: registration = {
    studentId: "tvy12345",
    fullName: "SucahyoHermawan",
    gradeLevel: "XI",
    courseId: "tvy123456",
    courseTitle: "antahBerantah",
    instructorName: "herdiSumanto",
    registrationDate: "14May",
    paymentCompleted: true,
}

const registration3: registration = {
    studentId: "tev12345",
    fullName: "SulisTiyanto",
    gradeLevel: "X",
    courseId: "tev123456",
    courseTitle: "pulauKapuk",
    instructorName: "PartoSuwanto",
    registrationDate: "24September",
    paymentCompleted: true,
}

console.log(registration1);
console.log(registration2);
console.log(registration3);