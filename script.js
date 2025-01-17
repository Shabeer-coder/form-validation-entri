document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    nameError.textContent = '';
    if (name.length < 3 || name.length > 50) {
        nameError.textContent = 'Name must be between 3 and 50 characters.';
        isValid = false;
    }

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    emailError.textContent = '';
    if (!email) {
        emailError.textContent = 'Email is required.';
        isValid = false;
    }

    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    phoneError.textContent = '';
    if (phone.length < 10 || phone.length > 14) {
        phoneError.textContent = 'Phone number must be between 10 and 14 digits.';
        isValid = false;
    }

    const age = document.getElementById('age').value;
    const ageError = document.getElementById('ageError');
    ageError.textContent = '';
    if (age < 12 || age > 100) {
        ageError.textContent = 'Age must be between 12 and 100.';
        isValid = false;
    }

    const genderError = document.getElementById('genderError');
    genderError.textContent = '';
    if (!document.querySelector('input[name="gender"]:checked')) {
        genderError.textContent = 'Please select a gender.';
        isValid = false;
    }

    const address = document.getElementById('address').value;
    const addressError = document.getElementById('addressError');
    addressError.textContent = '';
    if (address.length > 50) {
        addressError.textContent = 'Address must be less than 50 characters.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});