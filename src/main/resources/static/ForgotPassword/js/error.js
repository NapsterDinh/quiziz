var errorEmail = document.getElementById('msg')

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        return true;
    } else {
        errorEmail.style.display= "block";
        document.form1.text1.focus();
        return false;
    }
}