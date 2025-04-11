

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
       
            window.location.href = "index.html";
        
    }
};

export default Auth;
