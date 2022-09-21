// The manager constructor extends the employee constructor
class Intern extends Employee {
  constructor(name, id, email, officeNumber) {
    // Calls the employee constructor
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  // Returns the office number from the user input
  getofficeNumber() {
    return this.officeNumber;
  }

  // Turns the emplyee's role into an engineer
  getRole() {
    return "Manager"
  }
}