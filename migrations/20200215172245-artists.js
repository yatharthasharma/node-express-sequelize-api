export const up = (queryInterface, Sequelize) => queryInterface.createTable('artists', {
  name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
});

export const down = (queryInterface) => queryInterface.dropTable('artists');
