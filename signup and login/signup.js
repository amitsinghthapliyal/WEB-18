var dataArr = document.querySelector("#signUpForm").addEventListener("submit", signUp) || [];


function signUp(event){
    event.preventDefault();
    var userObj = {
    userName: signUpForm.name.value,
    userEmail: signUpForm.email.value,
    userPassword: signUpForm.password.value,
    }

    dataArr.push(userObj);
    localStorage.setItem("userData", JSON.stringify(dataArr));

}