import { auth } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// Login function
window.login = async function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const message = document.getElementById("loginMessage");

  try {
    await signInWithEmailAndPassword(auth, email, password);
    message.style.color = "lightgreen";
    message.textContent = "Login successful!";
    window.location.href = "dashboard.html";
  } catch (error) {
    message.style.color = "red";
    message.textContent = error.message;
  }
};

// Sign-up function
window.signUp = async function () {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const message = document.getElementById("signupMessage");

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    message.style.color = "lightgreen";
    message.textContent = "Account created! Redirecting...";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  } catch (error) {
    message.style.color = "red";
    message.textContent = error.message;
  }
};
