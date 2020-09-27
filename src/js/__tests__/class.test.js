import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('checking class creation Bowman', () => {
  const received = new Bowman('Oleg', 'Bowman');
  const expected = {
    name1: 'Oleg', type1: 'Bowman', level: 1, health: 100, attack: 25, defence: 25,
  };

  expect(received).toEqual(expected);
});

test('checking class creation Daemon', () => {
  const received = new Daemon('Oleg', 'Daemon');
  const expected = {
    name1: 'Oleg', type1: 'Daemon', level: 1, health: 100, attack: 10, defence: 40,
  };

  expect(received).toEqual(expected);
});

test('checking class creation Magician', () => {
  const received = new Magician('Oleg', 'Magician');
  const expected = {
    name1: 'Oleg', type1: 'Magician', level: 1, health: 100, attack: 10, defence: 40,
  };

  expect(received).toEqual(expected);
});

test('checking class creation Swordsman', () => {
  const received = new Swordsman('Oleg', 'Swordsman');
  const expected = {
    name1: 'Oleg', type1: 'Swordsman', level: 1, health: 100, attack: 40, defence: 10,
  };

  expect(received).toEqual(expected);
});

test('checking class creation Undead', () => {
  const received = new Undead('Oleg', 'Undead');
  const expected = {
    name1: 'Oleg', type1: 'Undead', level: 1, health: 100, attack: 25, defence: 25,
  };

  expect(received).toEqual(expected);
});

test('checking class creation Zombie', () => {
  const received = new Zombie('Oleg', 'Zombie');
  const expected = {
    name1: 'Oleg', type1: 'Zombie', level: 1, health: 100, attack: 40, defence: 10,
  };

  expect(received).toEqual(expected);
});
