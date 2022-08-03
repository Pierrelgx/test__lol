let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let submitError = document.getElementById('submit-error');


function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = "Le prénom est obligatoire ";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "❌";
        return false;
    }
    nameError.innerHTML = "✅";
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0) {
        emailError.innerHTML = "Le mail est obligatoire"
        return false;
    }
    
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "❌"
        return false;
    }
    emailError.innerHTML = "✅";
    return true;

}

function validateForm(){
    if(!validateName() || !validateEmail()){
        // console.log("test", validateForm);
        document.getElementById("test").innerHTML = " &nbsp ⛔️ Attention il manque quelque chose &nbsp ";
    } else {
        console.log("blabla");
        document.getElementById("test").innerHTML = " &nbsp ✅ Formulaire envoyé ! &nbsp ";
    }
    
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    
}

function myFunctionFailed() {
    var popupFailed = document.getElementById("myPopupFailed");
    popupFailed.classList.toggle("showFailed");
    
}


// function test() {
//     let result;
//     if (validateName() == true && validateEmail() == true) {
//       result = {myFunction}
//     } else {
//       result = {myFunctionFailed}
//     }
//     return result;
//   }


  
