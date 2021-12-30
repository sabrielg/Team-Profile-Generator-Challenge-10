const Manager = require('../lib/Manager.js')

test('creates Manager object', () => {
    const manager = new Manager('Sarah','123','lskfjaljfl@gmail.com','999');

    expect(manager.name).toBe('Sarah');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('lskfjaljfl@gmail.com');
    expect(manager.officeNumber).toBe('999');
});