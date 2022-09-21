// Constructor for employee
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email
  }

  // Will return the name from the user input
  getName() {
    return this.name;
  }

  // Will return the id from the user input
  getId() {
    return this.id;
  }

  // Will return the email from the user input
  getEmail() {
    return this.email;
  }

  // Will return the type of employee the user selected
  getRole() {
    return 'Employee';
  }
};

module.exports = Employee;