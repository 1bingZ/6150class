"use strict";

(function () {

    const nameField = document.querySelector('.name input');
    const emailField = document.querySelector('.email input');
    const confirmEmailField = document.querySelector('.confirm-email input');
    const Submit = document.querySelector('.form');

    // Submit button listener
    Submit.addEventListener('submit', function(event) {
        let formValid = true; 

        // Validate name field is not empty
        if (nameField.value.trim() === '') {
            displayError(nameField, 'Name is required');
            formValid = false;
        } else {
            removeError(nameField);
        }

        // Validate email field is not empty
        if (emailField.value.trim() === '') {
            displayError(emailField, 'Email is required');
            formValid = false;
        } else {
            removeError(emailField);
        }

        // Validate confirm email and email  are same
        if (confirmEmailField.value.trim() !== emailField.value.trim()) {
            displayError(confirmEmailField, 'Emails are not same');
            formValid = false;
        } else {
            removeError(confirmEmailField);
        }

        // Prevent form submission if formValid = false（form not valid）
        if (formValid = false) {
            event.preventDefault();
        }
    });

    //  name field input listener 
    nameField.addEventListener('input', function() {
        if (nameField.value.trim() === '') {
            displayError(nameField, 'Name is required');
        } else {
            removeError(nameField);
        }
    });

    // email field input listener
    emailField.addEventListener('input', function() {
        if (emailField.value.trim() === '') {
            displayError(emailField, 'Email is required');
        } else {
            removeError(emailField);
        }
    });

    // confirm-email field input listener
    confirmEmailField.addEventListener('input', function() {
        if (confirmEmailField.value.trim() !== emailField.value.trim()) {
            displayError(confirmEmailField, 'Emails are not same');
        } else {
            removeError(confirmEmailField);
        }
    });


    // Remove error message
    function removeError(element) {
        element.classList.remove('error'); 
        const errorMsg = element.nextElementSibling;
        if (errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.remove();
        }
    }

    // Show error message
    function displayError(element, message) {
        removeError(element);
        element.classList.add('error'); 
        const errorMsg = document.createElement('span');
        errorMsg.classList.add('error-message');
        errorMsg.style.color = 'red'; 
        errorMsg.innerText = message;
        element.after(errorMsg); 
    }

})();
