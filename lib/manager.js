// Import the Employee constructor
const Employee = require('./employee')

// The manager constructor extends the employee constructor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Calls the employee constructor
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  // Returns the office number from the user input
  getOfficeNumber() {
    return this.officeNumber;
  }

  // Turns the emplyee's role into an engineer
  getRole() {
    return "Manager"
  }
};

// To be exported
module.exports = Manager