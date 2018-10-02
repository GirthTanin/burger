 var connection = require("../config/connection.js");

 var orm = {
     selectAll: function(callback) {
         connection.query("SELECT * FROM burgers", function(error, results) {
             if (error) throw error;
             console.log(callback);
             callback(results)

         });
     },

     insertOne: function(burger_name, callback) {
         connection.query("INSERT INTO burgers SET ?", [{
             burger_name: burger_name,
             devoured: false
         }], function (error, result) {
             if (error) throw error;
             console.log(callback);
             callback(result);
         });
     },

     updateOne: function(burgerId, callback) {
         connection.query("UPDATE burgers SET ? WHERE ?", [{
             devoured: true
            },
            {
                id: burgerId
            }], function(error, result) {
                if (error) throw error;
                callback(result);
            });
     }
 };

 module.exports = orm;