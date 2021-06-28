let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3},
};
player['fullName'] = player.name + ' ' + player.lastName;

console.log('A jogadora ' + player.fullName + ' tem ' + player.age + ' anos de idade.');

player['bestiIntheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora ' + player.fullName + ' foi eleita a melhor do mundo por ' + player.bestiIntheWorld.length + ' vezes.')

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')