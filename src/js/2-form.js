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
  console.log('first correct', formData);

  const jsonFormData = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', jsonFormData);
  console.log('second correct', jsonFormData);
});

document.addEventListener('DOMContentLoaded', () => {
  const zipFormData = localStorage.getItem('feedback-form-state');
  const savedformData = JSON.parse(zipFormData) || {};
  email.value = savedformData.email || '';
  textarea.value = savedformData.message || '';
  console.log('third correct', savedformData);
});

form.addEventListener('submit', e => {
  (e.preventDefault(),
    //     let obj = {};
    // if (email.value === "" || textarea.value === "") {
    //     alert("All form fields must be filled in");
    // } else {
    //     obj = {
    //         email: email.value,
    //         password: textarea.value,
    //     };
    // };
    // console.log(obj);

    localStorage.removeItem('feedback-form-state'));
  form.reset();
});
