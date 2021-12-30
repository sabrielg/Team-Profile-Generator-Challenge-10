
const Employee = require('../lib/Employee.js')

test('creates Employee object', () => {
    const employee = new Employee('Armando','123','lskfjaljfl@gmail.com');

    expect(employee.name).toBe('Armando');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('lskfjaljfl@gmail.com');
});