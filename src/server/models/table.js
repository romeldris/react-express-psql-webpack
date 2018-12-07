'use strict';
module.exports = (sequelize, DataTypes) => {
  var table = sequelize.define('table', {}, {});
  table.associate = function(models) {
    // associations can be defined here
  };
  return table;
};