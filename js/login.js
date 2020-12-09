var username = document.getElementById("username");
var password = document.getElementById("password");


function validate() {


    if (username.value == 'admin' && password.value == '12345') {
        redirect();
    }
    else {
        alert(" Incorrect username or Password");
        $("#username").val('');
        $("#password").val('');
    }

}
function redirect(){
    location.replace("index.html");
}

