const formLoginRegister = document.querySelector(".form-login-register");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  formLoginRegister.classList.add("active");
});
loginLink.addEventListener("click", () => {
  formLoginRegister.classList.remove("active");
});
btnPopup.addEventListener("click", () => {
  formLoginRegister.classList.add("active-popup");
});
iconClose.addEventListener("click", () => {
  formLoginRegister.classList.remove("active-popup");
  formLoginRegister.classList.remove("active");
});

const formReset = document.querySelector(".form-resetpassword");
const resetLink = document.querySelector(".reset-link");
const iconCloseReset = document.querySelector(".icon-close-reset");

resetLink.addEventListener("click", () => {
  formLoginRegister.classList.add("active-show-reset");
  formReset.classList.add("active-hidden-login");
});
iconCloseReset.addEventListener("click", () => {
  formLoginRegister.classList.remove("active-show-reset");
  formReset.classList.remove("active-hidden-login");
});
