
// show password button
const passwordShowIcon = document.querySelector(".kr2-passfield-eye");
const passwordShowContainer = document.querySelector(".kr2-passfield-w-show");
const passwordShowType = document.querySelector(".kr2-passfield-w-show input");

passwordShowIcon.addEventListener("click", () => {
    if (passwordShowContainer.classList.contains("kr2-passfield-pass-show")) {
        passwordShowContainer.classList.remove("kr2-passfield-pass-show");
        passwordShowType.setAttribute("type", "text");
    }
    else {
        passwordShowContainer.classList.add("kr2-passfield-pass-show");
        passwordShowType.setAttribute("type", "password");
    }
});

//show password message
const passwordMessageIcon = document.querySelector(".passwd-msg");
const passwordMessage = document.querySelector(".passwd-tooltip");

passwordMessageIcon.addEventListener("click", () => {
    if (passwordMessage.classList.contains("hidden")) {
        passwordMessage.classList.remove("hidden");
    }
    else {
        passwordMessage.classList.add("hidden");
    }
});

//show continue button when complete validate input
const firstNameInput = document.querySelector(".user-fname-input input");
const lastNameInput = document.querySelector(".user-lname-input input");
const passInput = document.querySelector(".kr2-passfield-w-show input");
const isEmpty = str => !str.trim().length;
const continueButton = document.getElementById("continue-button");


passInput.addEventListener("input", () => {
    if (isEmpty(firstNameInput.value) ||  isEmpty(lastNameInput.value) || isEmpty(passInput.value)) {
        continueButton.classList.remove("kr2-btn-primary");
        continueButton.classList.add("kr2-btn-disabled");
    }
    else {
        continueButton.classList.remove("kr2-btn-disabled");
        continueButton.classList.add("kr2-btn-primary");
    }
});

firstNameInput.addEventListener("input", () => {
    if (isEmpty(firstNameInput.value) ||  isEmpty(lastNameInput.value) || isEmpty(passInput.value)) {
        continueButton.classList.remove("kr2-btn-primary");
        continueButton.classList.add("kr2-btn-disabled");
    }
    else {
        continueButton.classList.remove("kr2-btn-disabled");
        continueButton.classList.add("kr2-btn-primary");
    }
});

  /*  //lastname input
lastNameInput[0].addEventListener("input", () => {
    if (isEmpty(firstNameInput.value) ||  isEmpty(lastNameInput[1].value) || isEmpty(lastNameInput[0].value) || isEmpty(passInput.value)) 
    {
        continueButton.classList.remove("kr2-btn-primary");
        continueButton.classList.add("kr2-btn-disabled");
    }
    else {
        continueButton.classList.remove("kr2-btn-disabled");
        continueButton.classList.add("kr2-btn-primary");
    }
});*/


    //username input
lastNameInput.addEventListener("input", () => {
    if (isEmpty(firstNameInput.value) || isEmpty(lastNameInput.value) || isEmpty(passInput.value)) {
        continueButton.classList.remove("kr2-btn-primary");
        continueButton.classList.add("kr2-btn-disabled");
    }
    else {
        continueButton.classList.remove("kr2-btn-disabled");
        continueButton.classList.add("kr2-btn-primary");
    }
});
