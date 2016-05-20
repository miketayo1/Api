 
$(document).ready(function() {
	var name = $('username').val();
	$('#submit').on('click',function(){
    $.ajax({
        url:  "https://api.github.com/users/"+name+"?client_id=702c0ff55bb1c357d2ec&client_secret=ff30aa78040304af55639f9b907575278347552d"
    }).then(function(data) {
       console.log(data);
       $('.user_id').append(data.id)
       $('.avatar_url').append(data.avatar_url);
       $('.avatar_pic').attr('src',data.avatar_url);
    });
    
    return false
});
});