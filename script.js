const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Error function
function showError(input, message) {
    input.parentElement.classList.add('error');
    input.parentElement.querySelector('small').innerText = message;
}

//Success function
function showSuccess(input) {
    input.parentElement.classList.add('success');
}

//get field function
function getField(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Email validtor
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
}

// check if passwords are matching
function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Password do not match.')
    }
}

// check length of username
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getField(input)} length should be at least ${min} `)
    }
    else if(input.value.length > max) {
        showError(input, `${getField(input)} length should be less than ${max}`)
    }
    else{
        showSuccess(input)
    }
}

// input required function
function checkRequired(arrInputs) {
    arrInputs.forEach(function(input) {
            if(input.value.trim() === ''){
                showError(input, `${getField(input)} is required`);
            }
            else {
                showSuccess(input);
            }
        }
    )
}

//Event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 20);
    checkLength(password, 3, 20);
    checkLength(password2, 3, 20);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});

