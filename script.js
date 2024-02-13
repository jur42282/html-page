function hideSidebar() {
  const sidebar =document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

function showSidebar() {
  const sidebar =document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
});