$(document).ready(function() {
    $.ajax({
        url:  "https://api.github.com/users/miketayo1"
    }).then(function(data) {
       console.log(id);
       $('.user id').append(data.id)
       $('.avatar_url.').append(data.avatar_url);
    });
});