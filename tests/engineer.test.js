// Using the Engineer constructor to build the test for engineer
const Engineer = require('../lib/engineer');

// Creating an engineer object for the test
describe('engineer', () => {
  it('should create an engineer with a name, id, email, and github if provided valid arguments', () => {
    const engineer = new Engineer('Andrew', 03, 'drewrvaz@gmail.com', 'drewrvaz');

    // Testing to see if the github renders properly when input
    expect(engineer.github).toEqual('drewrvaz');
  });

  // Pulls the GitHub from getGithub()
  it('should pull the Github input', () => {
    const engineer = new Engineer('Andrew', 03, 'drewrvaz@gmail.com', 'drewrvaz');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
  });

  // Pulls role from getRole()
  it('should display the role of the employee as engineer', () => {
    const engineer = new Engineer('Andrew', 03, 'drewrvaz@gmail.com', 'drewrvaz')

    expect(engineer.getRole()).toEqual('Engineer');
  });
});