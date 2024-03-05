const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

form.addEventListener('submit', onSubmitBtn);
form.addEventListener('input', onInputData);
form.addEventListener('DOMContentLoaded', renderPage)

function onSubmitBtn(e) {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const message = e.currentTarget.elements.message.value;
    const userData = { email, message };

    if (!email.trim() || !message.trim()) {
        alert('Error Empty Fields!');
        return;
    }
    console.log(userData);

    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onInputData(e) {
    const email = e.currentTarget.elements.email.value;
    const message = e.currentTarget.elements.message.value;

    const userData = { email, message };
    saveToLS(STORAGE_KEY, userData);
}

function renderPage() {
    const data = loadFromLS(STORAGE_KEY);
    form.elements.email.value = data?.email || '';
    form.elements.message.value = data?.message || '';
}

function saveToLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}