module.exports = function (sequelize, DataTypes) {
    console.log("\n\nTHIS ALSO HAPPENS ON LOAD UP:       models/burger.js\n");
    const Burgers = sequelize.define("Burgers", {
        burgerName: {
            type: DataTypes.STRING,
            
            validate: {
                len: [1]
            }
        },
        devoured: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        }

    });

    return Burgers;
}


