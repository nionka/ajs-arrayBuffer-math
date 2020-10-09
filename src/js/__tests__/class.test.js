import Magic from '../Magic';

describe('check attack class Magic', () => {
  const daemon = new Magic('Oleg', 'Daemon');

  test('check attack 1', () => {
    daemon.newAttack = 1;
    expect(daemon.newAttack).toBe(10);
  });
  test('check attack 2', () => {
    daemon.newAttack = 2;
    expect(daemon.newAttack).toBe(9);
  });
  test('check attack 3', () => {
    daemon.newAttack = 10;
    expect(daemon.newAttack).toBe(0);
  });
  test('check attack 4', () => {
    daemon.newAttack = 12;
    expect(daemon.newAttack).toBe(0);
  });
});

describe('check attack with stoned class Magic', () => {
  const daemon = new Magic('Oleg', 'Daemon');
  daemon.stoned = true;

  test('check attack with stoned 1', () => {
    daemon.newAttack = 1;
    expect(daemon.newAttack).toBe(10);
  });

  test('check attack with stoned 2', () => {
    daemon.newAttack = 2;
    expect(daemon.newAttack).toBe(4);
  });

  test('check attack with stoned 3', () => {
    daemon.newAttack = 5;
    expect(daemon.newAttack).toBe(0);
  });
});
