document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const passwordCheckInput = document.getElementById('passwordCheck');
    const errorDisplay = document.getElementById('errorDisplay');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = usernameInput.value;
        const password = passwordInput.value;
        const passwordCheck = passwordCheckInput.value;
        let error = '';

 const uniqueChars = new Set(username);
 const validUsername = /^[a-zA-Z0-9]+$/.test(username);

 function checkConditions() {
    if (username == "" || username.length < 4 || uniqueChars.size < 2 || !validUsername) {
        error += 'Username must be at least 4 characters long.'
        'Username cannot contain any special characters or whitespace.'
        'Username must contain at least two unique characters.'
        ;
    }
    if (!/[A-Z]/.test(password) || password.length < 12 || !/[a-z]/.test(password) ||!/[0-9]/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password) || /password/i.test(password) || password.includes(username) || password !== passwordCheck) {
        error += 'Minimum length of 12 characters.'
'At least one uppercase letter.'
'At least one lowercase letter.'
'At least one number.'
'At least one special character.'
'No inclusion of the word "password".'
'No inclusion of the username.'
'Matching passwords in both fields.'; }
   
}
if (error) {
    errorDisplay.textContent = error;
} else {
    errorDisplay.textContent = '';
    form.submit();
}
});
});