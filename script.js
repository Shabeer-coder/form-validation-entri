document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('nameError');
    nameError.textContent = '';
    const namePattern = /^[A-Za-z\s]{3,50}$/;
    if (!namePattern.test(name)) {
        nameError.textContent = 'Name must be 3-50 characters and contain only letters.';
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    emailError.textContent = '';
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Enter a valid email address.';
        isValid = false;
    }

    const phone = document.getElementById('phone').value.trim();
    const phoneError = document.getElementById('phoneError');
    phoneError.textContent = '';
    const phonePattern = /^[0-9]{10,14}$/;
    if (!phonePattern.test(phone)) {
        phoneError.textContent = 'Phone number must be 10-14 digits and contain only numbers.';
        isValid = false;
    }

    const age = document.getElementById('age').value.trim();
    const ageError = document.getElementById('ageError');
    ageError.textContent = '';
    if (!/^\d+$/.test(age) || age < 12 || age > 100) {
        ageError.textContent = 'Age must be a number between 12 and 100.';
        isValid = false;
    }

    const genderError = document.getElementById('genderError');
    genderError.textContent = '';
    if (!document.querySelector('input[name="gender"]:checked')) {
        genderError.textContent = 'Please select a gender.';
        isValid = false;
    }

    const address = document.getElementById('address').value.trim();
    const addressError = document.getElementById('addressError');
    addressError.textContent = '';
    const addressPattern = /^[A-Za-z0-9\s,.-]{1,50}$/;
    if (!addressPattern.test(address)) {
        addressError.textContent = 'Address must be less than 50 characters and contain only letters, numbers, spaces, commas, or periods.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});
