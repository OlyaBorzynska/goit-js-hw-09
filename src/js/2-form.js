const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const textarea = form.elements.message;

form.addEventListener('input', () => {
  formData.email = email.value.trim();
  formData.message = textarea.value.trim();

  const jsonFormData = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', jsonFormData);
});

document.addEventListener('DOMContentLoaded', () => {
  const zipFormData = localStorage.getItem('feedback-form-state');
  const savedFormData = zipFormData ? JSON.parse(zipFormData) : {};
  email.value = savedFormData.email || '';
  textarea.value = savedFormData.message || '';
  formData.email = email.value;
  formData.message = textarea.value;
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (email.value.trim() === '' || textarea.value.trim() === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(formData);
    formData.email = '';
    formData.message = '';
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
});
