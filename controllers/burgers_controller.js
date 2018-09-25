const express = require("express");
const app = express();

var burger = require("../models/burgers.js");

// Create the GET route
router.get("/", function(request, response) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log("hbsObject line 12: " + hbsObject);
        res.render("index", hbsObject);
    });
});

// the POST route
router.post("/api/burgers", function(request, response) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        request.body.name, request.body.devoured
    ], function(result) {
            res.json({ id: result.insertId});
        });
    });

// to make the burgers devoured...
router.put("/api/burgers/:id", function(request, response) {
    var condition = "id = " + request.params.id;
    burger.updateOne(burgerId, function(result) {
        console.log(result);
        res.status(200).end();
    });
});