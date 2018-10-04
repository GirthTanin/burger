$(document).on("click", ".devourBurger", function(event) {
        event.preventDefault();
        let id = $(this).attr("data-id");
// console.log("Line 4 burgers.js");
        $.ajax({
            url: "/api/burgers/" + id,
            method: "PUT",
        }).then(
            function() {
                location.reload();
            });
        });

$(document).on("click", "#createBurger", function(event) {
        event.preventDefault();
            var newBurger = {
                burger_name: $("#burgerName").val().trim(),
                devoured: 0
            }

            $.ajax({
                url: "/api/burgers/",
                method: "POST",
                data: newBurger
            }).then (
                function() {
                    location.reload();
                }
            );
        });
 
$(document).on("click", ".againBurger", function(event) {
        event.preventDefault();
            let sameBurger = {
                burger_name : $(this.burger_name),
                devoured : 0
            }
            $.ajax({
                url: "/api/burgers/" + sameBurger, 
                method: "PUT",
                data: sameBurger
            }).then(
                function() {
                    location.reload();
                });
});




