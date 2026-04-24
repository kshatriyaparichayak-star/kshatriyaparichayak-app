import { auth } from "../services/firebase.js";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const provider = new GoogleAuthProvider();

export function initAuth() {
  const btn = document.getElementById("loginBtn");

  btn.addEventListener("click", () => {
    signInWithRedirect(auth, provider);
  });
}

// ✅ Redirect handle
export async function handleRedirect() {
  try {
    const result = await getRedirectResult(auth);

    if (result) {
      const user = result.user;

      document.getElementById("app").innerHTML =
        "<h2>Welcome " + user.displayName + "</h2>";
    }
  } catch (error) {
    console.error(error);
  }
}

// ✅ Always check user (IMPORTANT)
export function checkUser() {
  onAuthStateChanged(auth, (user) => {
    console.log("Auth State:", user); // 👈 DEBUG

    if (user) {
      document.getElementById("app").innerHTML =
        "<h2>Welcome " + user.displayName + "</h2>";
    } else {
      console.log("No user");
    }
  });
}