const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Este campo no puede quedar vacio" },
          isAlpha: {
            args: true,
            msg: "El nombre solo puede contener letras",
          },
          len: {
            args: [4, 50],
            msg: "El nombre tiene que ser entre 4 y 50 caracteres",
          },
        },
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Este campo no puede quedar vacio" },
          isInt: {
            args: true,
            msg: "La dificultad debe ser un numero",
          },
          min: {
            args: 1,
            msg: "La dificultad tiene que ser mayor o igual que uno",
          },
          max: {
            args: 5,
            msg: "La dificultad tiene que ser menor o igual que cinco",
          },
        },
      },
      duration: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: { args: true, msg: "Este campo debe ser un numero" },
        },
      },
      season: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Este campo no puede quedar vacio" },
        },
      },
    },
    { timestamps: false }
  );
};
