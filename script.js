let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.lenght == 0){
        nameError.innerHTML = "Le prénom est obligatoire ";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Prenom [espace] Nom ";
        return false;
    }
    nameError.innerHTML = '<i>✅</i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.lenght ==0) {
        emailError.innerHTML = "Le mail est obligatoire"
        return false;
    }
    
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email invalide"
        return false;
    }
    emailError.innerHTML = '<i>✅</i>';
    return true;

}

function validateForm(){
    if(!validateName() || !validateEmail()){
        submitError.style.display = "block";
        submitError.innerHTML = "⚠️ Un champs n'est pas correct";
        setTimeout(function(){submitError.style.display = "none"}, 3000);
        return false;
    }
}

