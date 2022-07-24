// const userForm = document.querySelector("#sign-up-form");
const pass = document.querySelector("#pass");
const passConfirm = document.querySelector("#passconfirm");
const submitButton = document.querySelector("#submit-button")
const passMatchError = document.querySelector(".pass-match-error");

const checkPassword = function(pass1, pass2){
    if (pass1 === pass2){
        pass.classList.remove("error");
        passConfirm.classList.remove("error");
        passMatchError.style.display = "none";
        return true;
    } else {
        pass.classList.add("error");
        passConfirm.classList.add("error");
        passMatchError.style.display = "block";
        return false;
    };
}

// userForm.onsubmit

submitButton.addEventListener("click", function(event){
    if (!checkPassword(pass.value, passConfirm.value)){
        this.classList.add("error");
        event.preventDefault();
    } else {
        this.classList.remove("error");
        return;
    }
})