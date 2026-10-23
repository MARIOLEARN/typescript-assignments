/**
 * The HR department wants to display bonus notifications for employees.
 * Business Rules
 *  - Performance score ≥ 85 → Bonus Approved
 *  - Otherwise → Bonus Not Approved
 * Employee data:
 * | Employee       | Score |
 * | ---------------| ----- |
 * | John Cena      |    92 |
 * | Undertaker     |    76 |
 * | Rey Mysterio   |    88 |
 * 
 * Instead of repeating the decision logic, the HR department wants a reusable function.
 * The function should display the notification directly and does not return any value.
 * 
 * Student Tasks:
 * 1. Create a function named showBonusStatus.
 * 2. The function receives:
 *  - employee name
 *  - performance score
 * 3. Display the bonus result inside the function.
 * 4. Call the function for every employee.
 */
type Employee = {
  name: string;
  score: number;
};

const employees: Employee[] = [
  { name: "agus", score: 92 },
  { name: "budi", score: 76 },
  { name: "yanto", score: 88 },
];

function showBonusStatus(employee: Employee) {
  if (employee.score >= 85) {
    console.log(`${employee.name} has been approved for a bonus.`);
  } else {
    console.log(`${employee.name} has not been approved for a bonus.`);
  }
}

showBonusStatus(employees[0]);
showBonusStatus(employees[1]);
showBonusStatus(employees[2]);