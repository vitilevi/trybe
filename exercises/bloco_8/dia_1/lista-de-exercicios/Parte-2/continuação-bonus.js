const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
const ob = battleMembers;

const dragonDamage = () => {
  const min = 15;
  const max = ob.dragon.strength;
  ob.dragon.damage = Math.floor(Math.random() * (max - min)) + min;
  return ob.dragon.damage;
}

const warriorDamage = () => {
  const min = ob.warrior.strength;
  const max = min * ob.warrior.weaponDmg;
  ob.warrior.damage = Math.floor(Math.random() * (max - min)) + min;
  return ob.warrior.damage;
}

const mageDamage = () => ({
  damage: ob.mage.damage = Math.floor(Math.random() * ob.mage.intelligence) + ob.mage.intelligence,
  manaCost: ob.mage.mana <= 0? 'Não possui mana' : 15,
});

const gameActions = {
  warriorTurn: (block) => {
    const wDamage = block();
    ob.warrior.damage = wDamage;
    ob.dragon.healthPoints -= wDamage;
  },
  mageTurn: (block) => {
    const mDamage = block()
    ob.dragon.healthPoints -= mDamage.damage;
    ob.mage.mana -= mDamage.manaCost;
  },
  dragonTurn: (block) => {
    const dDamage = block()
    ob.dragon.damage = dDamage;
    ob.warrior.healthPoints -= dDamage;
    ob.mage.healthPoints -= dDamage;
  },
  upDate: () => console.log(ob)
}
gameActions.upDate();
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
gameActions.upDate();