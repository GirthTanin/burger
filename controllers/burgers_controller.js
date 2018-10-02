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
    console.log("burgers_controller.js line 16 " + request.body);
    burger.insertOne([ "burger_name", "devoured"], [request.body.burger_name, request.body.devoured], function (data) {
    response.json({ id: data.insertId });
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
    burger.updateOne({
        devoured: 0
    }, burgerId, function(result) {
        console.log(result);
        response.send(result);
        response.status(200).end();
    });
});

router.get("*", function (req, res) {
    res.redirect("/");
});


module.exports = router;