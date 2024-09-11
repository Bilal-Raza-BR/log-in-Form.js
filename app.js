var emailArrays = [];
var passwordArrays = [];
function insertValue() {
    var userEmail = document.getElementById("email").value;
  
    var userpassword = document.getElementById("password").value;
  
    emailArrays.push(userEmail);
    passwordArrays.push(userpassword);

    document.getElementById("data").innerHTML = `

    <h3 class="heading">Email : ${userEmail}</h3>
    <br> <br>
    <h3 class="heading">password : ${userpassword}</h3>`

// document.write("Your Email ;",emailArrays,"<br><br>","Your Password ;",userpassword )


}