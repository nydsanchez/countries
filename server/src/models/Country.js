const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Este campo no puede quedar vacio" },
        },
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Este campo no puede quedar vacio" },
          isUrl: { msg: "Debe introducer una url valida" },
        },
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Este campo no puede quedar vacio" },
        },
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Este campo no puede quedar vacio" },
        },
      },
      subregion: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: { msg: "Introduzca un valor numerico" },
        },
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: "Introduzca un valor numerico" },
        },
      },
    },
    { timestamps: false }
  );
};
