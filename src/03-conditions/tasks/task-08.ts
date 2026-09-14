/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */
type cabinClass = "Economy" | "Business";
const passenger: string = "Faeyza Dito";
const onlineCheckIn: boolean = true;
const cabinClassBusiness: boolean = true;
const baggageWeight: number = 27;

let reSult: string;

if (!onlineCheckIn) { reSult = `${passenger}, Please complete the online check-in first`;
  }  else if (baggageWeight >20) {
        if (cabinClassBusiness) {
             reSult = `${passenger}, you are allowed to have extra baggage`;
        } else {
            reSult = `${passenger}, your Additional baggage fee is required`;
        }
    } else {
    reSult = `${passenger}, you are Proceed to boarding pass printing`;
}
console.log(reSult)