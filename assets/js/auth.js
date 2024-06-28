    document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById('register-btn');
    const loginBtn = document.getElementById('login-btn');
    const modal = document.getElementById('modal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const switchToRegister = document.getElementById('switch-to-register');
    const switchToLogin = document.getElementById('switch-to-login');
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    // Show register form
    registerBtn.addEventListener('click', function () {
        modal.style.display = 'flex';
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    // Show login form
    loginBtn.addEventListener('click', function () {
        modal.style.display = 'flex';
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    // Close modal
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    });

    // Switch to register form
    switchToRegister.addEventListener('click', function () {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    // Switch to login form
    switchToLogin.addEventListener('click', function () {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    // Close modal when clicking outside the form
    modal.addEventListener('click', function (e) {
        if (e.target === modal || e.target.classList.contains('modal__overlay')) {
            modal.style.display = 'none';
        }
    });
});