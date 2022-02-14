const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resumen_del_plato: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    puntuacion: {
      type: DataTypes.STRING,
    },
    comida_saludable: {
      type: DataTypes.STRING,

    },
    paso_a_paso: {
      type: DataTypes.STRING,

    }
  });
};
