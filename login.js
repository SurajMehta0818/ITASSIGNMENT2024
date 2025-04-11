
import Auth from './auth.js';

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const logoutBtn = document.getElementById('logout-btn');

    // Redirect if already logged in (for login page)
    if (window.location.pathname.includes('login.html') && Auth.isAuthenticated()) {
        Auth.handleRedirect();
        return;
    }

    // Initialize logout button if exists
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }

    // Toggle password visibility
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Toggle eye icon
            const eyeIcon = this.querySelector('i');
            eyeIcon.classList.toggle('fa-eye-slash');
            eyeIcon.classList.toggle('fa-eye');
        });
    }

    // Form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }

    // Update navigation active state
    updateActiveNavLink();

    // Event Handlers
    function handleLogin() {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const rememberMe = document.querySelector('input[name="remember"]').checked;
        
        if (!username || !password) {
            showError('Please fill in all fields');
            return;
        }
        
        authenticateUser(username, password, rememberMe);
    }

    function handleLogout(e) {
        e.preventDefault();
        Auth.logout(() => {
            window.location.href = 'login.html';
        });
    }

    // Core Functions
    function authenticateUser(username, password, rememberMe) {
        const loginBtn = document.querySelector('.login-btn');
        loginBtn.textContent = 'Logging in...';
        loginBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            if (validateCredentials(username, password)) {
                Auth.login(rememberMe, () => {
                    Auth.handleRedirect();
                });
            } else {
                showError('Invalid username or password');
                resetLoginButton(loginBtn);
            }
        }, 1500);
    }

    function validateCredentials(username, password) {
        // Replace with actual API call in production
        return username.length > 0 && password.length > 0;
    }

    function resetLoginButton(btn) {
        btn.textContent = 'Login';
        btn.disabled = false;
    }

    function showError(message) {
        let errorElement = document.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            if (loginForm) loginForm.prepend(errorElement);
        }
        errorElement.textContent = message;
        errorElement.style.color = '#dc3545';
        errorElement.style.marginBottom = '15px';
    }

    function updateActiveNavLink() {
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.href === window.location.href) {
                link.classList.add('active');
            }
        });
    }
});


