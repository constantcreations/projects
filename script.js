// Form submission handler
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const fullname = document.getElementById('fullname').value; // Get the fullname

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@wlcormoc.edu.ph$/;
    if (!emailPattern.test(email)) {
        alert('Please use your school email (@wlcormoc.edu.ph).');
        return;
    }

    // Password match validation
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Store fullname in localStorage
    localStorage.setItem('fullname', fullname);

    // If all validations pass, redirect to the dashboard
    window.location.href = 'dashboard.html';
});

// Function to open terms and services
function openTerms() {
    window.location.href = 'termsandservices.html';
}

// Function to open privacy policy
function openPrivacy() {
    window.location.href = 'privacypolicy.html';
}

// DOMContentLoaded event handler
document.addEventListener('DOMContentLoaded', function() {
    const fullname = localStorage.getItem('fullname');
    if (fullname) {
        document.getElementById('fullname-display').textContent = fullname;
    } else {
        document.getElementById('fullname-display').textContent = 'Guest';
    }

    // Navigation button active state handler
    document.querySelectorAll('nav button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
    
});