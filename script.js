document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Get error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Clear previous error messages
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';

    // Simple validation
    let isValid = true;

    if (name === '') {
        nameError.textContent = 'Please enter your name.';
        nameError.style.display = 'block';
        isValid = false;
    } 
    if (email === '' || !validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        isValid = false;
    }
    if (message === '') {
        messageError.textContent = 'Please enter a message.';
        messageError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        alert('Your massege sent has been successfully');
        // Reset the form fields
        document.getElementById('contactForm').reset();
    }
});

// Function to validate email address
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}