 
$(document).ready(function() {
	var name = $('username').val();
	$('#submit').on('click',function(){
    $.ajax({
        url:  "https://api.github.com/users/"+name
    }).then(function(data) {
       console.log(data);
       $('.user_id').append(data.id)
       $('.avatar_url').append(data.avatar_url);
    });
    return false
});
});