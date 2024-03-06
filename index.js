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

const logoutBtn = document.querySelector('.logout-btn');
const signedUserContainer = document.querySelector('.loged-user-interface');
const signedUser = document.querySelector('.signed-user');

export function showLogoutBtn() {
  if (logoutBtn.style.display === 'none') {
    logoutBtn.style.display = 'flex';
    logoutBtn.style.top = '46px';
    logoutBtn.style.transition = 'all 2s linear';
  } else {
    logoutBtn.style.display = 'none';
    logoutBtn.style.top = '0';
    logoutBtn.style.transition = 'all 2s linear';
  }
}

signedUser.addEventListener('click', showLogoutBtn);

// signedUserContainer.style.display = 'none';

export function showLogedUserInerface() {
  refs.openModalBtn.style.display = 'none';
  signedUserContainer.style.display = 'block';
  signedUser.style.display = 'block'
}


refs.signUpBtn.addEventListener("submit", showLogedUserInerface);
refs.signInBtn.addEventListener("submit", showLogedUserInerface);
