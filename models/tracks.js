export default (sequelize, DataTypes) => {
  const track = sequelize.define('tracks', {
    name: DataTypes.STRING,
    id: DataTypes.INTEGER,
    artistId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    freezeTableName: true,
  });
  track.associate = (models) => {
    track.belongsTo(models.artist, { foreignKey: 'artistId' });
    // track.hasOne(models.something);
    // track.belongsToMany(models.album, {through: models.albumtrackmapping, foreignKey: 'someId'});
  };
};
