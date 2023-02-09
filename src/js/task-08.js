const body = document.querySelector('body');
body.style.backgroundColor = '#232931';
body.style.color = '#eeeeee';

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', submitHandler);
const profile = {};

function submitHandler(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  } else {
    profile.email = email.value;
    profile.password = password.value;

    console.log(profile);
  }
  event.currentTarget.reset();
}
