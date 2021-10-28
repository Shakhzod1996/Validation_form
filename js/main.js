const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs();
})

function checkInputs() {
    const userNameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if (userNameValue === '') {
        setErrorFor(username, 'Username Cannot be blank');

    } else {
        setSuccesFor(username)
    }

    // Email
    if (emailValue !== 'shaxzod1996shax@gmail.com') {
        setErrorFor(email, 'Email Cannot be blank');

    } else {
        setSuccesFor(email)
    }

// Password
    if (passwordValue !== '1234567') {
        setErrorFor(password, 'Password Cannot be blank');

    } else {
        setSuccesFor(password)
    }

    // Password repear
    if (password2Value == '') {
        setErrorFor(password2, 'Password Cannot be blank');

    } else if(passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords do not match');

    } else {
        setSuccesFor(password2)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerHTML = message;
    // add error class
    formControl.className = 'form-control error';
}

function setSuccesFor(input) {
    const formControl = input.parentElement; // .form-control
    
    formControl.className = 'form-control succes'
}

// social
let floatingBtn = document.querySelector('.floating-btn');
let socialPanel = document.querySelector('.social-ponel-container');
let closeBtn = document.querySelector('.close-btn');


floatingBtn.addEventListener('click', () => {
    socialPanel.classList.toggle('visible')
})

closeBtn.addEventListener('click', () => {
    socialPanel.classList.remove('visible')
})



