// Using the Employee contstructor to build the test for employee
const Employee = require('../lib/employee');

// Creating an employee object
describe('employee', () => {
  describe('Initialization', () => {
    it('should create an employee with a name, id, and email if provided valid arguments', () => {
      const employee = new Employee('Andrew', 03, 'drewrvaz@gmail.com');

      // Verify that the new object has the correct properties
      expect(employee.name).toEqual('Andrew');
      expect(employee.id).toEqual(03);
      expect(employee.email).toEqual('drewrvaz@gmail.com');
    });

    // Pulls the name from getName()
    it('should pull the name input', () => {
      const employee = new Employee('Andrew', 03, 'drewrvaz@gmail.com')
      expect(employee.getName()).toEqual(expect.any(String));
    });

    // Pulls the ID from getId()
    it('should pull the id input', () => {
      const employee = new Employee('Andrew', 03, 'drewrvaz@gmail.com')
      expect(employee.getId()).toEqual(expect.any(Number));
    });

    // Pulls the email from getEmail()
    it('should pull the email input', () => {
      const employee = new Employee('Andrew', 03, 'drewrvaz@gmail.com')
      expect(employee.getEmail()).toEqual(expect.any(String));
    });

    // Pulls the role from getRole()
    it('should pull the employee role', () => {
      const employee = new Employee('Andrew', 03, 'drewrvaz@gmail.com')
      expect(employee.getRole()).toEqual('Employee');
    });
  });
});

