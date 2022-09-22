// Using the Intern constructor to build the test for manager
const Intern = require('../lib/intern');

// Creating an intern object for the test
describe('intern', () => {
  it('should create an intern with a name, id, email, and school if provided valid arguments', () => {
    const intern = new Intern('Andrew', 03, 'drewrvaz@gmail.com', 'Michigan');

    // Testing to see if the school renders properly when input
    expect(intern.school).toEqual('Michigan');
  });

  // Pulls the School from getSchool()
  it('should pull the school input', () => {
    const intern = new Intern('Andrew', 03, 'drewrvaz@gmail.com', 'Michigan');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
  });

  // Pulls role from getRole()
  it('should display the role of the employee as intern', () => {
    const intern = new Intern('Andrew', 03, 'drewrvaz@gmail.com', 'drewrvaz')

    expect(intern.getRole()).toEqual('Intern');
  });
});