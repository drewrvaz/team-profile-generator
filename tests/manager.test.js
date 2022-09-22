// Using the Manager constructor to build the test for manager
const Manager = require('../lib/manager');

// Creating an manager object for the test
describe('manager', () => {
  it('should create an manager with a name, id, email, and office number if provided valid arguments', () => {
    const manager = new Manager('Andrew', 03, 'drewrvaz@gmail.com', 101);

    // Testing to see if the Office Number renders properly when input
    expect(manager.officeNumber).toEqual(101);
  });

  // Pulls the Office Number from getOfficeNumber()
  it('should pull the office number input', () => {
    const manager = new Manager('Andrew', 03, 'drewrvaz@gmail.com', 'Michigan');

    expect(manager.getGithub()).toEqual(expect.any(Number));
  });

  // Pulls role from getRole()
  it('should display the role of the employee as manager', () => {
    const manager = new Manager('Andrew', 03, 'drewrvaz@gmail.com', 'drewrvaz')

    expect(manager.getRole()).toEqual('Manager');
  });
});