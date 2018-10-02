// pulling in the ORM to work with the data base using functions.
const orm = require("../config/orm.js");

// using a constant here should work as the object can mutate
const burger = {
    selectAll: function(callback) {
        orm.selectAll(function (response) {
            callback(response);
        });
    },
    
    insertOne: function(burger_name, callback) {
        orm.insertOne(burger_name, function(response) {
            callback(response);
        });
    },
    updateOne: function(burgerId, callback) {
        orm.update(burgerId, function(response) {
            callback(response);
        });
    }
};

module.exports = burger;