import Character from '../Character';

test('checking class creation Character', () => {
  function creationNewCharacter() {
    return new Character('O', 'Undead');
  }

  expect(creationNewCharacter).toThrowError(new Error('Имя задано не правильно'));
});

test('checking class creation Character', () => {
  function creationNewCharacter() {
    return new Character('Abrakadabra', 'Undead');
  }

  expect(creationNewCharacter).toThrowError(new Error('Имя задано не правильно'));
});

test('checking class creation Character', () => {
  function creationNewCharacter() {
    return new Character(10, 'Undead');
  }

  expect(creationNewCharacter).toThrowError(new Error('Имя задано не правильно'));
});

test('checking class creation Character', () => {
  function creationNewCharacter() {
    return new Character('Oleg', 'Cat');
  }

  expect(creationNewCharacter).toThrowError(new Error('Не правильно задан тип!'));
});

test('checking class creation Character', () => {
  function creationNewCharacter() {
    return new Character('Oleg', 10);
  }

  expect(creationNewCharacter).toThrowError(new Error('Не правильно задан тип!'));
});

test('checking class creation Character', () => {
  const received = new Character('Oleg', 'Undead');
  const expected = {
    name1: 'Oleg', type1: 'Undead', level: 1, health: 100, attack: null, defence: null,
  };

  expect(received).toEqual(expected);
});

test('checking class creation Character', () => {
  function creationNewCharacter() {
    const testClass = new Character('Ivan', 'Zombie');
    return testClass.name;
  }

  expect(creationNewCharacter()).toEqual('Ivan');
});

test('checking class creation Character', () => {
  function creationNewCharacter() {
    const testClass = new Character('Ivan', 'Zombie');
    return testClass.type;
  }

  expect(creationNewCharacter()).toBe('Zombie');
});
