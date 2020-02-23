export const up = (queryInterface) => queryInterface.bulkInsert('tracks', [{
  id: 1,
  name: 'When you\'re Gone',
  artistId: 1,
},
{
  id: 2,
  name: 'Complicated',
  artistId: 1,
}, {
  id: 3,
  name: 'Welcome to New York',
  artistId: 2,
}, {
  id: 4,
  name: 'Lover',
  artistId: 2,
}, {
  id: 5,
  name: 'Bad Blood',
  artistId: 2,
}]);

export const down = (queryInterface) => queryInterface.bulkDelete('tracks', null, {});
