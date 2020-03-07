"use strict";
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter your name"
          },
          notBlank(value) {
            if (value.length < 1) {
              throw new Error("Name required");
            }
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter password"
          },
          notBlank(value) {
            if (value.length < 1) {
              throw new Error("Password required");
            }
          }
        }
      }
    },
    {
      hooks: {
        beforeCreate: (userData, options) => {
          const salt = bcrypt.genSaltSync(saltRounds);
          userData.password = bcrypt.hashSync(userData.password, salt);
        }
      }
    }
  );

  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
