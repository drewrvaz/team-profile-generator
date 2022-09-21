// The engineer constructor extends the employee constructor
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // Calls the employee constructor
    super(name, id, email);

    this.github = github;
  }

  // Returns the github from the user input
  getGithub() {
    return this.github;
  }

  // Turns the emplyee's role into an engineer
  getRole() {
    return "Engineer"
  }
}