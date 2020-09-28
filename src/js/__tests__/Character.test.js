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

test('checking class methods Character', () => {
  function creationNewCharacter() {
    const user = new Character('Ironman', 'Bowman');
    user.attack = 25;
    user.defence = 25;
    user.levelUp();
    return user;
  }

  const expected = {
    name1: 'Ironman', type1: 'Bowman', level: 2, health: 100, attack: 30, defence: 30,
  };

  expect(creationNewCharacter()).toEqual(expected);
});

test('checking class methods Character', () => {
  function creationNewCharacter() {
    const user = new Character('Ironman', 'Bowman');
    user.health = 0;
    user.attack = 25;
    user.defence = 25;
    user.levelUp();
    return user;
  }

  expect(creationNewCharacter).toThrowError(new Error('Нельзя повысить левел умершего'));
});

test('checking class methods Character', () => {
  function creationNewCharacter() {
    const user = new Character('Ironman', 'Bowman');
    user.attack = 25;
    user.defence = 25;
    user.damage(10);
    return user;
  }

  const expected = {
    name1: 'Ironman', type1: 'Bowman', level: 1, health: 92.5, attack: 25, defence: 25,
  };

  expect(creationNewCharacter()).toEqual(expected);
});

test('checking class methods Character', () => {
  function creationNewCharacter() {
    const user = new Character('Ironman', 'Bowman');
    user.health = 5;
    user.attack = 25;
    user.defence = 25;
    user.damage(10);
    return user;
  }

  const expected = {
    name1: 'Ironman', type1: 'Bowman', level: 1, health: 0, attack: 25, defence: 25,
  };

  expect(creationNewCharacter()).toEqual(expected);
});
