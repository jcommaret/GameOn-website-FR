/* form elements selector */
const form = document.querySelector('#signup');

const firstEl = document.querySelector('#firstname');
const lastEl = document.querySelector('#lastname');
const emailEl = document.querySelector('#email');
const quantityEl = document.querySelector('#quantity');
const birthdateEl = document.querySelector('#birthdate');
const checkboxCGU = document.querySelector('#checkbox1');
const radio1 = document.querySelector('#location1');
const radio2 = document.querySelector('#location2');
const radio3 = document.querySelector('#location3');
const radio4 = document.querySelector('#location4');
const radio5 = document.querySelector('#location5');
const radio6 = document.querySelector('#location6');

const checkboxNewsletter = document.querySelector('#checkbox2');
// Check if required // 
const isRequired = value => value === '' ? false : true;
// FirstName
const isFirstNameValid = (firstname) => {
    const regex = /^(?=.{2,})/;
    return regex.test(firstname);
};

const checkFirstName = () => {
    let valid = false;
    const firstname = firstEl.value.trim();
    if (!isRequired(firstname)) {
        showError(firstEl, 'Votre prénom ne doit pas être vide');
    } else if (!isFirstNameValid(firstname)) {
        showError(firstEl, 'Votre prénom doit comporter 2 charactères au minimum')
    } else {
        showSuccess(firstEl);
    valid = true;
    }
  return valid;
};

// Last Name
const isLastNameValid = (lastname) => {
  const regex = /^(?=.{2,})/;
  return regex.test(lastname);
};
const checkLastName = () => {
  let valid = false;
  const lastname = lastEl.value.trim();
  if (!isRequired(lastname)) {
        showError(lastEl, 'Votre nom ne doit pas être vide');
  } else if (!isLastNameValid(lastname)) {
        showError(lastEl, 'Votre nom doit comporter 2 charactères au minimum')
  } else {
        showSuccess(lastEl);
    valid = true;
  }
  return valid;
};

// Email
const isEmailValid = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};
const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
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
const isDateValid = (date) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
};
const checkDate = () => {
  let valid = false;
  const birthdate = birthdateEl.value.trim();
  if (!isRequired(birthdate)) {
      showError(birthdateEl, 'Votre date de naissance doit être remplie');
  } else if (!isDateValid(birthdate)) {
      showError(birthdateEl, 'La Date n\'est pas valide')
  } else {
      showSuccess(birthdateEl);
      valid = true;
  }
  return valid;
};

// quantity
const isQuantityValid = (quantity) => {
  const regex = /^\b([0-9]|[1-9][0-9])\b/;
  return regex.test(quantity);
};
const checkQty = () => {
  let valid = false;
  const quantity = quantityEl.value.trim();
  if (!isRequired(quantity)) {
      showError(quantityEl, 'Vous devez entrer une quantité');
  } else if (!isQuantityValid(quantity)) {
      showError(quantityEl, 'Veuillez enter un nombre s\'il vous plait ')
  } else {
      showSuccess(quantityEl);
      valid = true;
  }
  return valid;
};

// Check if checkbox is valid
const isCheckboxValid = () => {
    let valid = false;
    if (!checkboxCGU.checked){
        showError(checkboxCGU, 'Veuillez accepter les conditions générales');
    }
    else {
        showSuccess(checkboxCGU);
        valid = true;
    }
    return valid;  
};

const isradiosValid = () => {
    let valid = false;
    if (radio1.checked | radio2.checked | radio3.checked | radio4.checked | radio5.checked | radio6.checked){
        valid = true;    
    }
    else {
        valid = false;
        showError(radio1, 'Merci de selectionner une ville.')
        console.log(radio1.checked, radio2.checked, radio3.checked, radio4.checked, radio5.checked, radio6.checked);
    }
    return valid;  
};

// Presente le message d'erreur
const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.textContent = message;
};

// Ne presente pas le message d'erreur
const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const error = formField.querySelector('small');
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
        showThanks();   
    }
});

// Debounce
const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

// 
form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'email':       checkEmail();
        case 'firstname':   checkFirstName();
        case 'lastname':    checkLastName();
        case 'birthdate':   checkDate();
        case 'quantity':    checkQty();
        case 'checkbox1':   isCheckboxValid();
        
    break;          
    }
}));

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
