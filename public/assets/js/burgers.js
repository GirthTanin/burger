$(function () {
    $(".devourBurger").on("click", function(event) {
        let id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: id
        }).then(
            function() {
                location.reload();
            });
        });

    $("#createBurger").on("click", function(event) {
        event.preventDefault();
            let newBurger = {
                burger_name: $("newBurger").val().trim()
            };

            $.ajax("/api/burgers/", {
                type: "POST",
                data: newBurger
            }).then (
                function() {
                    location.reload();
                }
            );
        });

    $(".againBurger").on("click", function(evet) {
        event.preventDefault();
            let sameBurger = $(this).data("id");
            $.ajax("/api/burgers/" + sameBurger, {
                type: "PUT",
                data: sameBurger
            }).then(
                function() {
                    location.reload();
                });
        });
});



