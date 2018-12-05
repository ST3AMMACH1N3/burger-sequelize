$(document).ready(() => {
    $(".devour-btn").on("click", (event) => {
        let url = "/api/burger/" + $(event.currentTarget).data("id");
        console.log(url);
        $.ajax({
            url: url,
            method: "PUT"
        }).then(() => {
            location.reload();
        });
    });
});