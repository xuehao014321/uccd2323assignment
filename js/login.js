// Handle the transition between Sign Up and Sign In forms
var signUpButton = document.getElementById('signUp');
var signInButton = document.getElementById('signIn');
var container = document.getElementById('dowebok');

signUpButton.addEventListener('click', function () {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', function () {
    container.classList.remove('right-panel-active');
});

//Validate email format
function isValidEmail(email) {
    // This pattern validates most email addresses and is based on general rules for email format.
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}


// Validate password length
function isValidPassword(password) {
    // Minimum length of 6 characters
    const minLength = 6;
    return password.length >= minLength;
}

// Function to handle sign-up
function signUp() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Validate inputs
    if (!name || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!isValidPassword(password)) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Get existing users from local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        alert('Email is already registered.');
        return;
    }

    // Add new user to the list
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Sign up successful! Please log in.');
}

// Function to handle login
function signIn() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Validate inputs
    if (!email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Get users from local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Find a user with matching email and password
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Set session storage for logged-in user
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('userEmail', email);

        // Set a cookie to remember the user
        setCookie('userEmail', email, 7); // Cookie valid for 7 days

        alert('Login successful!');
        window.location.href = '../pages/information.html'; // Adjust path if needed
    } else {
        alert('Invalid email or password.');
    }
}

// Utility function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Utility function to get a cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Utility function to erase a cookie
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Check if user is already logged in
window.onload = function() {
    const loggedIn = sessionStorage.getItem('loggedIn');
    const userEmail = getCookie('userEmail');

    if (loggedIn === 'true' || userEmail) {
        alert('You are already logged in.');
        
    }
}


// Function to delete a user
function deleteUser(email) {
    // Get existing users from local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Filter out the user with the given email
    users = users.filter(user => user.email !== email);
    
    // Save the updated list back to local storage
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('User deleted successfully.');
}


// Function to delete all users
function deleteAllUsers() {
    localStorage.removeItem('users');
    alert('All users deleted successfully.');
}


// Function to clear session storage
function clearSession() {
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('userEmail');
    alert('Session cleared.');
}
