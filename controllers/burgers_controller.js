var express = require("express");
var router = express.Router();

var burger = require("../models/burgers.js");

// Create the GET route
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", { burgers: data });
    });
});

// the POST route
router.post("/api/burgers", function(request, response) { 
    console.log("burgers_controller.js line 15 " + JSON.stringify(request.body));
    burger.insertOne(request.body.burger_name, function (data) {
    response.redirect("/");
    });
});
    

// to make the burgers devoured: true
router.put("/api/burgers/:id", function(request, response) {
    var burgerId = request.params.id;
    burger.updateOne(burgerId, function(result) {
        console.log(result);
        response.status(200).end();
    });
});

//to recreate the burger (devoured: false)...
router.put("/api/burgers/:id", function(request, response) {
    var burgerId = request.params.id;
    burger.recreateOne(burgerId, function(result) {
        // console.log(result);
        response.send(result);
        response.status(200).end();
    });
});

module.exports = router;