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

submitButton.addEventListener("click", function(event){
    checkPassword();
    if (!checkPassword(pass.value, passConfirm.value)){
        // If checkPassword returns false, don't submit the form (default action)
        event.preventDefault();
    }
    return;
})