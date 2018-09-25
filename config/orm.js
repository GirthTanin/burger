 var connection = require("../config/connection.js");

 var orm = {
     selectAll: function(cb) {
         connection.query("SELECT * FROM burgers", function(error, result) {
             if (error) throw error;
             cb(result);
         });
     },

     insertOne: function(burger_name, cb) {
         connection.query("INSERT INTO burgers SET ?", [{
             burger_name: burger_name,
             devoured: false
         }], function (error, result) {
             if (error) throw error;
             cb(result);
         });
     },

     updateOne: function(burgerId, cb) {
         connection.query("UPDATE burgers SET ? WHERE ?", [{
             devoured: true
            },
            {
                id: burgerId
            }], function(error, result) {
                if (error) throw error;
                cb(result);
            });
     }
 };

 module.exports = orm;