// Email validation
let minLength = 8;
let maxLength = 50;
let emailInput = document.getElementById("email");
let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Regex is a regular expression
let validInfoElement = document.querySelector(".valid_info");

function subscribe() {
  validInfoElement.classList.remove("error", "success"); // Reset classes

  if (emailInput.value.length === 0) {
    validInfoElement.textContent = ""; // Clear message when input is empty
  } else if (
    emailRegex.test(emailInput.value) &&
    emailInput.value.length >= minLength &&
    emailInput.value.length <= maxLength
  ) {
    validInfoElement.textContent = "Valid email format";
    validInfoElement.classList.add("success");
  } else {
    validInfoElement.textContent = "Invalid email format";
    validInfoElement.classList.add("error");
  }
}
document.getElementById("email").addEventListener("input", subscribe);

// Form submission thank you message
function formSubmission(event) {
  event.preventDefault(); // Prevent default form submission
  if (emailInput.value.length > 0 && emailRegex.test(emailInput.value)) {
    validInfoElement.textContent = "Thank you for subscribing!";
    emailInput.value = ""; // Optionally clear the input field
    // Further code to disable the form or input if needed
  } else {
    // Handle case where the email is not valid when the form is submitted
    validInfoElement.textContent = "Please enter a valid email to subscribe.";
    validInfoElement.classList.add("error");
  }
}
document.querySelector("form").addEventListener("submit", formSubmission);
