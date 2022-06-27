/* form elements selector */
let form = document.querySelector('#signup');

let firstEl = document.querySelector('#firstname');
let lastEl = document.querySelector('#lastname');
let emailEl = document.querySelector('#email');
let quantityEl = document.querySelector('#quantity');
let birthdateEl = document.querySelector('#birthdate');
let checkboxCGU = document.querySelector('#checkbox1');
let radio1 = document.querySelector('#location1');
let radio2 = document.querySelector('#location2');
let radio3 = document.querySelector('#location3');
let radio4 = document.querySelector('#location4');
let radio5 = document.querySelector('#location5');
let radio6 = document.querySelector('#location6');

let checkboxNewsletter = document.querySelector('#checkbox2');
// Check if required // 
let isRequired = value => value === '' ? false : true;
// FirstName
let isFirstNameValid = (firstname) => {
    let regex = /^(?=.{2,})/;
    return regex.test(firstname);
};

let checkFirstName = () => {
    let valid = false;
    let firstname = firstEl.value.trim();
    if (!isRequired(firstname)) {
        showError(firstEl, 'Votre prénom ne doit pas être vide.');
    } else if (!isFirstNameValid(firstname)) {
        showError(firstEl, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.')
    } else {
        showSuccess(firstEl);
    valid = true;
    }
  return valid;
};

// Last Name
let isLastNameValid = (lastname) => {
  let regex = /^(?=.{2,})/;
  return regex.test(lastname);
};
let checkLastName = () => {
  let valid = false;
  let lastname = lastEl.value.trim();
  if (!isRequired(lastname)) {
        showError(lastEl, 'Votre nom ne doit pas être vide.');
  } else if (!isLastNameValid(lastname)) {
        showError(lastEl, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.')
  } else {
        showSuccess(lastEl);
    valid = true;
  }
  return valid;
};

// Email
let isEmailValid = (email) => {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};
let checkEmail = () => {
    let valid = false;
    let email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Votre email ne peut pas être vide.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Votre email n\'est pas valide.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

// Date
let isDateValid = (date) => {
    let regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
};
let checkDate = () => {
  let valid = false;
  let birthdate = birthdateEl.value.trim();
  if (!isRequired(birthdate)) {
      showError(birthdateEl, 'Vous devez entrer votre date de naissance.');
  } else if (!isDateValid(birthdate)) {
      showError(birthdateEl, 'La Date n\'est pas valide.')
  } else {
      showSuccess(birthdateEl);
      valid = true;
  }
  return valid;
};

// quantity
let isQuantityValid = (quantity) => {
  let regex = /^\b([0-9]|[1-9][0-9])\b/;
  return regex.test(quantity);
};
let checkQty = () => {
  let valid = false;
  let quantity = quantityEl.value.trim();
  if (!isRequired(quantity)) {
      showError(quantityEl, 'Vous devez entrer une quantité.');
  } else if (!isQuantityValid(quantity)) {
      showError(quantityEl, 'Veuillez enter un nombre s\'il vous plait.')
  } else {
      showSuccess(quantityEl);
      valid = true;
  }
  return valid;
};

// Check if checkbox is valid
let isCheckboxValid = () => {
    let valid = false;
    if (!checkboxCGU.checked){
        showError(checkboxCGU, 'Vous devez vérifier que vous acceptez les termes et conditions.');
        valid = false;
    }
    else {
        showSuccess(checkboxCGU);
        valid = true;
    }
    return valid;  
};

// check if radios is valid
let isradiosValid = () => {
    let valid = false;
    if (radio1.checked || radio2.checked || radio3.checked || radio4.checked || radio5.checked || radio6.checked){
        valid = true;
    }
    else {
        showError(radio1, 'Merci de selectionner une ville.');
        valid = false;
    }
    return valid;  
};

// Presente le message d'erreur
let showError = (input, message) => {
    let formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    let error = formField.querySelector('small');
    error.textContent = message;
};

// Ne presente pas le message d'erreur
let showSuccess = (input) => {
    let formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    let error = formField.querySelector('small');
    error.textContent = '';
}

// Soumission du formulaire
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Validation des champs
    let isEmailValid = checkEmail(),
        isFirstNameValid = checkFirstName(),
        isLastNameValid = checkLastName(),
        isDateValid = checkDate(),
        isQuantityValid = checkQty(),
        isCheckboxValid = true,
        isradiosValid = true;
        
    // Validation du formulaire    
    let isFormValid = 
        isEmailValid && 
        isFirstNameValid && 
        isLastNameValid && 
        isDateValid &&
        isCheckboxValid &&
        isradiosValid &&
        isQuantityValid;
    // si le formulaire est valide, envoie un log en console au submit. 
    if (isFormValid) {
        createUser();
        showThanks(); 
    }
});

form.addEventListener('input',function (e) {
    switch (e.target.id) {
        case 'email':       checkEmail();
        case 'firstname':   checkFirstName();
        case 'lastname':    checkLastName();
        case 'birthdate':   checkDate();
        case 'quantity':    checkQty();
        case 'checkbox1':   isCheckboxValid();
        case 'location1':   isradiosValid();
    break;          
    }
});
// Présente le message de remerciement.
function showThanks() {
    var thanks = document.getElementById("thanks");
    var form = document.getElementById("signup");
    if (thanks.style.display == '') {
      thanks.style.display = 'block';
      form.style.display = 'none';
    }
    else {
      thanks.style.display = 'none';
      form.style.display = 'block';
    }
};



function createUser() {
    // creation de la classe
    class User {
        constructor(firstname, lastname, emailEl, birthdateEl, quantityEl)  {
            this.firstname = firstname.value,
            this.lastname = lastname.value,
            this.email = emailEl.value,
            this.birthdate = birthdateEl.value,
            this.quantity = quantityEl.value
        }
    }
    // creation du nouvel utilisateur
    const newUser = new User(firstname, lastname, email, birthdate, quantity);
    Array.prototype.push.apply(newUser);
    console.log(newUser);
};
