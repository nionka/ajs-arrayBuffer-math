import Character from './Character';

export default class Magic extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
    this.stoned = false;
  }

  set newAttack(value) {
    const attackValue = Math.trunc(this.attack * (1 - (value - 1) / 10));

    if (this.stoned) {
      this.attackNew = Math.trunc(attackValue - Math.log2(value) * 5);
    } else {
      this.attackNew = attackValue;
    }

    if (this.attackNew <= 0) {
      this.attackNew = 0;
    }
  }

  get newAttack() {
    return this.attackNew;
  }

  set stoned(value) {
    this.stoned1 = value;
  }

  get stoned() {
    return this.stoned1;
  }
}
