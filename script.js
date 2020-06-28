// Accessing buttons
const btn = document.getElementById('submit-btn');

// Accessing input field
const input = document.querySelector('.email-field');

// Acessing error/success messages
const errorMessage = document.querySelector('.error-message');
const successMessage = document.querySelector('.success-message');

// Function for the event listener
const log = event => {
  const pattern = new RegExp("@");
  const response = pattern.test(input.value); 
  // Conditions for the error and success message
  if (input.value === '' || response === false) {
    errorMessage.textContent = 'Please provide a valid email';
    errorMessage.classList.add('error-txt');
    input.classList.add('failed');
    event.preventDefault();
  } else {
    input.classList.add('success');
    successMessage.textContent = 'You have subscribed successfully!'
    successMessage.classList.add('success-txt');
    event.preventDefault();
  }
}

// Executes the event listener and calling the function
btn.addEventListener('click', event => log(event));