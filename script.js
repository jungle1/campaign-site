const updatesForm = document.getElementById('updates-form');
const emailInput = document.getElementById('email');
const formMessage = document.getElementById('form-message');
const yearNode = document.getElementById('year');

yearNode.textContent = new Date().getFullYear();

updatesForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

  if (!isValidEmail) {
    formMessage.textContent = 'Please enter a valid email address.';
    formMessage.classList.add('error');
    formMessage.classList.remove('success');
    emailInput.setAttribute('aria-invalid', 'true');
    emailInput.focus();
    return;
  }

  formMessage.textContent =
    "Thanks for signing up! We'll keep you informed on CUPE Local 2 campaign actions.";
  formMessage.classList.add('success');
  formMessage.classList.remove('error');
  emailInput.setAttribute('aria-invalid', 'false');
  updatesForm.reset();
});
