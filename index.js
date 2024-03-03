const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".closeModalBtn");
const signInOption = document.querySelector(".signInOption");
const signUpOption = document.querySelector(".signUpOption");
const signUpBtn = document.querySelector(".signUpBtn");
const signInBtn = document.querySelector(".signInBtn");
const signUpForm = document.getElementById("signUpForm");
const signInForm = document.getElementById("signInForm");
const modal = document.getElementById("signupModal");

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
signInOption.addEventListener("click", showSignInForm);
signUpOption.addEventListener("click", showSignUpForm);
signUpBtn.addEventListener("click", signUp);
signInBtn.addEventListener("click", signIn);

function openModal() {
  modal.style.display = "block";
  openModalBtn.style.display = "none";
  showSignUpForm();
}

function closeModal() {
  modal.style.display = "none";
  openModalBtn.style.display = "block";
}

function showSignInForm() {
  signUpForm.style.display = "none";
  signInForm.style.display = "block";
  signInOption.classList.add("active");
  signUpOption.classList.remove("active");
}

function showSignUpForm() {
  signUpForm.style.display = "block";
  signInForm.style.display = "none";
  signUpOption.classList.add("active");
  signInOption.classList.remove("active");
}

function signUp() {
  iziToast.show({
    title: "Success",
    message: "Sign up successful!",
    theme: "dark",
    icon: "icon-person",
    color: "green",
    position: "topRight",
    timeout: 5000,
  });
  closeModal();
}

function signIn() {
  iziToast.show({
    title: "Success",
    message: "Sign in successful!",
    theme: "dark",
    icon: "icon-person",
    color: "green",
    position: "topRight",
    timeout: 5000,
  });
  closeModal();
}
