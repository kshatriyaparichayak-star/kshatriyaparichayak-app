import { auth } from '../services/firebase.js';
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const provider = new GoogleAuthProvider();

export function initLogin() {
  const btn = document.getElementById("loginBtn");

  btn.addEventListener("click", async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("Login Success ✅", user);
      alert("Welcome " + user.displayName);

    } catch (error) {
      console.error("Login Error ❌", error);
    }
  });
}