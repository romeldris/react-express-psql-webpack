import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      username: {type: DataTypes.STRING, allowNull: false},
      email: {type: DataTypes.STRING, allowNull: false, unique: true},
      password: {type: DataTypes.STRING, allowNull: false},
    },
    {
      hooks: {
        beforeCreate: (newUser, options) => {
          newUser.password = bcrypt.hashSync(
            newUser.password,
            bcrypt.genSaltSync(8),
            null,
          );
        },
      },
    },
  );

  user.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  return user;
};
