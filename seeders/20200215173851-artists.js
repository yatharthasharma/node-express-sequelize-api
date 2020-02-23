export const up = (queryInterface) => queryInterface.bulkInsert('artists', [{
  id: 1,
  name: 'Avril Lavigne',
},
{
  id: 2,
  name: 'Taylor Swift',
}]);

export const down = (queryInterface) => queryInterface.bulkDelete('artists', null, {});
