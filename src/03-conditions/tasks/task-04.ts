/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

const Customername: string = "Agustinus Ray";
const PremiumMember: boolean = true;
const RoomAvailable: boolean = false;
let Result: string;


if (RoomAvailable) {
  if (PremiumMember) {
    Result = `${Customername}, you have received a free room upgrade.`;
  } else {
    Result = `${Customername}, your reserved room is ready.`;
  }
} else {
  if (PremiumMember) {
    Result = `${Customername}, no rooms available, you have been placed on the priority waiting list.`;
  } else {
    Result = `${Customername}, no rooms are available at this time.`;
  }
}

console.log(Result);