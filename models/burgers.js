// pulling in the ORM to work with the data base using functions.
const orm = require("../config/orm.js");

// using a constant here should work as the object can mutate
const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(response) {
            cb(response);
        });
    },
    // the variables cols and vals are arrays...
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(response) {
            cb(response);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(response) {
            cb(response);
        });
    }
};

module.exports = burger;