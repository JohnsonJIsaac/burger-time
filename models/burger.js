module.exports = function (sequelize, DataTypes) {
console.log("\n\n\YAYAYAYAYAYAYAY\n")
  const Burgers = sequelize.define("burgers", {
    burgerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
  return Burgers;
}