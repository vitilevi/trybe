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

const dragonDamage = () => {
  const min = 15;
  const max = battleMembers.dragon.strength;
  battleMembers.dragon.damage = Math.floor(Math.random() * (max - min)) + min;
  return battleMembers.dragon.damage;
}
console.log(`Dano dragão: ${dragonDamage()}`);

const warriorDamage = () => {
  const min = battleMembers.warrior.strength;
  const max = min * battleMembers.warrior.weaponDmg;
  battleMembers.warrior.damage = Math.floor(Math.random() * (max - min)) + min;
  return battleMembers.warrior.damage;
}

console.log(`Dano guerreiro: ${warriorDamage()}`);

const mageMana = (value) => (value <= 0)? 'Sem mana' : value -= 15;

const mageDamage = () => ({
  Damage: battleMembers.mage.damage = Math.floor(Math.random() * battleMembers.mage.intelligence) + battleMembers.mage.intelligence,
  ManaCost: battleMembers.mage.mana <= 0? 'Não possui mana' : 15,
});
console.log(battleMembers.mage.mana);
console.log(mageDamage());