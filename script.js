"use strict";

//form validation check
const inputFirstName = document.querySelector("#first-name");
const inputLastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const form = document.querySelector("form");

const errorFirstName = document.querySelector("#error-first-name");
const errorLastName = document.querySelector("#error-last-name");
const errorEmail = document.querySelector("#error-email");
const errorPassword = document.querySelector("#error-password");

//run field-specific validation on blur
inputFirstName.addEventListener("blur", validateFirstName);
inputLastName.addEventListener("blur", validateLastName);
email.addEventListener("blur", validateEmailField);
password.addEventListener("blur", validatePassword);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  //validate all fields before submitting
  const valid =
    validateFirstName() &
    validateLastName() &
    validateEmailField() &
    validatePassword();

  if (valid) {
    alert("Form submitted successfully");
    form.reset();
    clearErrors();
  }
});

function validateFirstName() {
  const value = inputFirstName.value.trim();
  if (value == "") {
    errorFirstName.textContent = "First Name cannot be empty";
     return false;
  } else if (value.length < 3 || value.length > 16) {
    errorFirstName.textContent =
      "First Name must be between 3 and 16 characters";
    return false;
  } else {
    errorFirstName.textContent = "";
    return true;
  }
}

function validateLastName() {
  const value = inputLastName.value.trim();
  if (value == "") {
    errorLastName.textContent = "Last Name cannot be empty";
    return false;
  } else if (value.length < 3 || value.length > 16) {
    errorLastName.textContent = "Last Name must be between 3 and 16 characters";
    return false;
  } else {
    errorLastName.textContent = "";
    return true;
  }
}

function validateEmailField() {
  const value = email.value.trim();
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(value)) {
    errorEmail.textContent = "Looks like this is not a valid email";
    return false;
  } else {
    errorEmail.textContent = "";
    return true;
  }
}

function validatePassword() {
  const value = password.value.trim();
  if (value === "") {
    errorPassword.textContent = "Password cannot be empty";
    return false;
  } else if (value.length < 5) {
    errorPassword.textContent = "Password must be atleast 5 characters long";
    return false;
  } else {
    errorPassword.textContent = "";
    return true;
  }
}

function clearErrors() {
  errorFirstName.textContent = "";
  errorLastName.textContent = "";
  errorEmail.textContent = "";
  errorPassword.textContent = "";
}

// function validateForm() {
//   let isValid = true;
//   let messages = [];

//   //validate First name
//   if (inputFirstName.value.trim() === "") {
//     errorFirstName.textContent = "First Name can not be empty";
//     // messages.push("First Name cannot be empty.");
//     isValid = false;
//   } else if (
//     inputFirstName.value.length < 3 ||
//     inputFirstName.value.length > 16
//   ) {
//     errorFirstName.textContent = "Name must be between 3 and 16 characters";
//     // messages.push("First Name must be between 3 and 16 characters.");
//     isValid = false;
//   }
//   //else {
//   //     errorMessage.textContent = "";
//   //   }

//   //validate Last name
//   if (inputLastName.value.trim() === "") {
//     errorLastName.textContent = "Last Name can not be empty";
//     // messages.push("Last Name cannot be empty.");
//   } else if (
//     inputLastName.value.length < 3 ||
//     inputLastName.value.length > 16
//   ) {
//     errorLastName.textContent = "Name must be between 3 and 16 characters";
//     // messages.push("Last Name must be between 3and 16 characters.");
//     isValid = false;
//   }
//   //    else {
//   //     errorMessage.textContent = "";
//   //   }

//   //validate email
//   if (!validateEmail(email.value)) {
//     errorEmail.textContent = "Looks like this is not an email";
//     // messages.push("Looks like this is not a valid email");
//     isValid = false;
//   }
//   //   else{
//   //     errorMessage.textContent = '';
//   //   }

//   //validate password
//   if (password.value.trim() === "") {
//     errorPassword.textContent = "password can not be empty";
//     // messages.push("Password cannot be empty.");
//     isValid = false;
//   } else if (password.value.length < 5) {
//     errorPassword.textContent = "password must be atlest 5 characters long";
//     // messages.push("Password must be at least 5 character long.");
//     isValid = false;
//   }

//   //display all messages
//   //   errorMessage.textContent = messages.join();

//   return isValid;
// }

// function clearErrors() {
//   errorFirstName.textContent = "";
//   errorLastName.textContent = "";
//   errorEmail.textContent = "";
//   errorPassword.textContent = "";
// }

// //simple email validation function
// function validateEmail(email) {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(String(email).toLowerCase());
// }
