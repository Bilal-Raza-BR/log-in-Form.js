var emailArrays = [];
var passwordArrays = [];
function insertValue() {
    var userEmail = document.getElementById("email").value;

    var userpassword = document.getElementById("password").value;

    emailArrays.push(userEmail);
    passwordArrays.push(userpassword);

    document.getElementById("data").innerHTML = `
<  <p class="heading"> <b>EMAIL</b> : ${emailArrays}</p>
    <br> <br>
    <p class="heading"> <b>PASSWORD </b>: ${passwordArrays}</p>`

    // document.write("Your Email ;",emailArrays,"<br><br>","Your Password ;",userpassword )


}

function pop() {
    var userEmail = document.getElementById("email").value;

    var userpassword = document.getElementById("password").value;

    emailArrays.pop();
    passwordArrays.pop();

    document.getElementById("data").innerHTML = `
  <p class="heading"> <b>EMAIL</b> : ${emailArrays}</p>
    <br> <br>
    <p class="heading"> <b>PASSWORD </b>: ${passwordArrays}</p>`


    // document.write("Your Email ;",emailArrays,"<br><br>","Your Password ;",userpassword )


}

function shift() {
    var userEmail = document.getElementById("email").value;

    var userpassword = document.getElementById("password").value;

    emailArrays.shift();
    passwordArrays.shift();

    document.getElementById("data").innerHTML = `

    <p class="heading"> <b>EMAIL</b> : ${emailArrays}</p>
    <br> <br>
    <p class="heading"> <b>PASSWORD </b>: ${passwordArrays}</p>`

    // document.write("Your Email ;",emailArrays,"<br><br>","Your Password ;",userpassword )


}