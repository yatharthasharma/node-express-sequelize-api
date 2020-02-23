export const up = (queryInterface, Sequelize) => queryInterface.createTable('tracks', {
  name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true,
  },
  artistId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'artists',
      key: 'id',
    },
  },
});

export const down = (queryInterface) => queryInterface.dropTable('tracks');
