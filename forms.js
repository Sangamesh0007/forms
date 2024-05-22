function validate() {
    var uv = /^[A-Z a-z]+$/;
    var un = document.getElementById("uname").value;
    var um = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var umail = document.getElementById("email").value;
    var ph = /^[6-9]{1}[0-9]{9}$/;
    var up = document.getElementById("number").value;
    var upwd = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/;
    var password = document.getElementById("pwd").value;
    var cnfpwd = document.getElementById("cnf-pwd").value;

    var isValid = true;

    // Validate User Name
    if (un === "") {
        document.getElementById("username").innerHTML = "Enter the user name";
        isValid = false;
    } else if (!un.match(uv)) {
        document.getElementById("username").innerHTML = "Please enter a valid user name";
        isValid = false;
    } else if (un.length < 3) {
        document.getElementById("username").innerHTML = "User name must be more than 2 characters";
        isValid = false;
    } else {
        document.getElementById("username").innerHTML = "";
    }

    // Validate Email
    if (umail === "") {
        document.getElementById("mail").innerHTML = "Please enter Email";
        isValid = false;
    } else if (!umail.match(um)) {
        document.getElementById("mail").innerHTML = "Invalid Email";
        isValid = false;
    } else {
        document.getElementById("mail").innerHTML = "";
    }

    // Validate Phone Number
    if (up === "") {
        document.getElementById("phnum").innerHTML = "Please enter mobile number";
        isValid = false;
    } else if (!up.match(ph)) {
        document.getElementById("phnum").innerHTML = "Please enter a correct phone number";
        isValid = false;
    } else {
        document.getElementById("phnum").innerHTML = "";
    }

    // Validate Password
    if (password === "") {
        document.getElementById("pass").innerHTML = "Please enter password";
        isValid = false;
    } else if (!password.match(upwd)) {
        document.getElementById("pass").innerHTML = "Password should contain atleast one upercase, one lowercase and special character (@,$,!,%,*,?,&)";
        isValid = false;
    }
    else if(password.length < 8 || password.length > 20 ){
        document.getElementById("pass").innerHTML="Password must be between 8 characters to 19 characters"
        isValid = false;
    } else {
        document.getElementById("pass").innerHTML = "";
    }

    // Validate Confirm Password
    if (cnfpwd === "") {
        document.getElementById("cnfpwd").innerHTML = "Please re-enter password";
        isValid = false;
    } else if (cnfpwd !== password) {
        document.getElementById("cnfpwd").innerHTML = "Passwords do not match";
        isValid = false;
    } else {
        document.getElementById("cnfpwd").innerHTML = "";
    }

    return isValid;
}
