function addCommentFunctionality() {
    $('#formComment').on('submit', function(event) {
        event.preventDefault();

        // We get the username and comment from the input tags.
        let name = $('.userName').val();
        let comment = $('#userComment').val();

        // If either of those is empty we abort the rest of the function.
        if (name === "" || comment === "") {
            return;
        }

        // We append the name and comment in the seccionComments div
        // adding its corresponding classes.
        $('.seccionComments').append(`<p class="comName">` + name + `</p><p class="comComment">` + comment + `</p>`);

        // We clear the inputs so that a new comment can be introduced.
        $('.userName').val("");
        $('#userComment').val("");
    });
}

function init() {
    addCommentFunctionality();
}

init();