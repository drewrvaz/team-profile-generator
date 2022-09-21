// The intern constructor extends the employee constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    // Calls the employee constructor
    super(name, id, email);

    this.school = school;
  }

  // Returns the school from the user input
  getSchool() {
    return this.school;
  }

  // Turns the emplyee's role into an engineer
  getRole() {
    return "Intern"
  }
};

// To be exported
module.exports = Intern