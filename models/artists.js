export default (sequelize, DataTypes) => {
  const artist = sequelize.define('artists', {
    name: DataTypes.STRING,
    id: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    freezeTableName: true,
  });
  artist.associate = (models) => {
    artist.hasMany(models.songs);
  };
};
