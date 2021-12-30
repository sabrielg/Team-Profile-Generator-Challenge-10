const Engineer = require('../lib/Engineer.js')

test('creates Engineer object', () => {
    const engineer = new Engineer('Bob','123','lskfjaljfl@gmail.com','sabrielg');

    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('lskfjaljfl@gmail.com');
    expect(engineer.gitHub).toBe('sabrielg');
});