function init(){
    $("#submit").on("click", function(e){
        e.preventDefault();
        let user = $("#userName").val();
        let pass = $("#passWord").val();

        if(user != '' && pass != ''){
            Swal.fire({
                icon: 'success',
                title: 'Welcome!',
                text: ('Welcome back, ' + user + '!')
              });
              $("#userName").val("");
            $("#passWord").val("");
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter a username and password!'
              });
            //alert("Enter your name, silly!");
        }
    });
}


$(document).ready(function(){
    init();

});