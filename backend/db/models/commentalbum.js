'use strict';
module.exports = (sequelize, DataTypes) => {
  const CommentAlbum = sequelize.define('CommentAlbum', {
    comment: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER
  }, {});
  CommentAlbum.associate = function(models) {
    CommentAlbum.belongsTo(models.User, {foreignKey: 'userId'});
    CommentAlbum.belongsTo(models.Album, { foreignKey: 'albumId'});
  };
  return CommentAlbum;
};
