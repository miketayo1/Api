$(document).ready(function() {
    $.ajax({
        url:  "https://api.github.com/users/a"
    }).then(function(data) {
       console.log(data);
       $('.user id').append(data.id)
       $('.avatar_url.').append(data.avatar_url);
    });
});