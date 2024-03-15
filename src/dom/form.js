// Create a form dynamically using JavaScript with input fields for name and email, and append it to a div in the HTML document.
const div=document.querySelector('#form-div');
const form=document.createElement('form');
const nameInput=document.createElement('input');
const emailInput=document.createElement('input');
const br = document.createElement('br');
const nameLabel = document.createElement('label');
const emailLabel = document.createElement('label');

nameLabel.textContent = 'Name:';
nameInput.type='text';

emailLabel.textContent = 'Email:';
emailInput.type='email'

div.appendChild(form)
form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(br); 
form.appendChild(br); 
form.appendChild(emailLabel);
form.appendChild(emailInput)



