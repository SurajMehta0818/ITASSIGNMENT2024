// // auth.js - Comprehensive Authentication Helper Functions
// const Auth = {
//     // Check if user is logged in (simple boolean check)
//     isAuthenticated: function() {
//         return localStorage.getItem('isLoggedIn') === 'true' || 
//                sessionStorage.getItem('isLoggedIn') === 'true';
//     },

//     // Login function with storage preference
//     login: function(rememberMe = false, callback) {
//         const storage = rememberMe ? localStorage : sessionStorage;
//         storage.setItem('isLoggedIn', 'true');
//         if (callback) callback();
//     },

//     // Complete logout
//     logout: function(callback) {
//         localStorage.removeItem('isLoggedIn');
//         sessionStorage.removeItem('isLoggedIn');
//         localStorage.removeItem('redirectUrl');
//         sessionStorage.removeItem('redirectUrl');
//         if (callback) callback();
//     },

//     // Check and redirect if not authenticated
//     checkAuth: function() {
//         if (!this.isAuthenticated()) {
//             window.location.href = 'login.html';
//             return false;
//         }
//         return true;
//     },

//     // Enhanced version with redirect tracking
//     requireAuth: function() {
//         if (!this.isAuthenticated()) {
//             const storage = window.location.href.includes('login') ? 
//                           localStorage : sessionStorage;
//             storage.setItem('redirectUrl', window.location.pathname);
//             window.location.href = 'login.html';
//             return false;
//         }
//         return true;
//     },

//     // Handle post-login redirect
//     handleRedirect: function() {
//         const redirectUrl = localStorage.getItem('redirectUrl') || 
//                           sessionStorage.getItem('redirectUrl');
//         if (redirectUrl) {
//             localStorage.removeItem('redirectUrl');
//             sessionStorage.removeItem('redirectUrl');
//             window.location.href = redirectUrl;
//         }
//     }
// };

// export default Auth;



const Auth = {
    isAuthenticated: function() {
        return localStorage.getItem('isLoggedIn') === 'true' || 
               sessionStorage.getItem('isLoggedIn') === 'true';
    },

    login: function(rememberMe = false, callback) {
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem('isLoggedIn', 'true');
        if (callback) callback();
    },

    logout: function(callback) {
        localStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('isLoggedIn');
        localStorage.removeItem('redirectUrl');
        sessionStorage.removeItem('redirectUrl');
        if (callback) callback();
    },

    checkAuth: function() {
        if (!this.isAuthenticated()) {
            window.location.href = 'login.html';
            return false;
        }
        return true;
    },

    requireAuth: function() {
        if (!this.isAuthenticated()) {
            const storage = window.location.href.includes('login') ? 
                          localStorage : sessionStorage;
            storage.setItem('redirectUrl', window.location.pathname);
            window.location.href = 'login.html';
            return false;
        }
        return true;
    },

    handleRedirect: function() {
        const redirectUrl = localStorage.getItem('redirectUrl') || 
                          sessionStorage.getItem('redirectUrl');
        if (redirectUrl) {
            localStorage.removeItem('redirectUrl');
            sessionStorage.removeItem('redirectUrl');
            window.location.href = redirectUrl;
        }
    }
};

export default Auth;
