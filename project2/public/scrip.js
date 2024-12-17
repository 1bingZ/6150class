"use strict";


//subsribe form set
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal');
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    document.body.appendChild(overlay);

    const subscribeButtons = document.querySelectorAll('.subscribe');
    const cancelButton = modal.querySelector('.cancel');

    function showModal() {
        modal.style.display = 'block';
        overlay.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        overlay.setAttribute('aria-hidden', 'false');
    }

    function hideModal() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        overlay.setAttribute('aria-hidden', 'true');
    }

    subscribeButtons.forEach(function(button) {
        button.addEventListener('click', showModal);
    });

    cancelButton.addEventListener('click', hideModal);
});

//subscribe validation set
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector(".subscribe-form");
    const emailInput = form.querySelector(".email");
    const confirmEmailInput = form.querySelector(".confirm");
    const emailError = form.querySelector(".email_error");
    const confirmEmailError = form.querySelector(".confirm_error");

    function showError(inputElement, errorElement, message) {
        errorElement.innerText = message;
        errorElement.style.display = 'block';
    }

    function clearError(errorElement) {
        errorElement.innerText = '';
        errorElement.style.display = 'none';
    }

    form.addEventListener("submit", function(event) {
        let isValid = true;

        if (!emailInput.value.includes('@')) {
            showError(emailInput, emailError, "This field must be a valid email address including a @");
            isValid = false;
        }

        if (confirmEmailInput.value !== emailInput.value) {
            showError(confirmEmailInput, confirmEmailError, "This field must match the provided email address");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

//hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', function() {
        const isHidden = mobileMenu.getAttribute('aria-hidden') === 'true';
        mobileMenu.setAttribute('aria-hidden', !isHidden);
    });

    
});
});