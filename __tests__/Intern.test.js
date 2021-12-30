const Intern = require('../lib/Intern.js')

test('creates Intern object', () => {
    const intern = new Intern('Bob','123','lskfjaljfl@gmail.com','Harvard');

    expect(intern.name).toBe('Bob');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('lskfjaljfl@gmail.com');
    expect(intern.school).toBe('Harvard');
});