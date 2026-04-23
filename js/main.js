// ✅ Firebase CDN imports (IMPORTANT)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDo7HW-0Awi3ddYWdxbmSB4zQUoxvZMEb4",
  authDomain: "kshatriyaparichayak-app.firebaseapp.com",
  projectId: "kshatriyaparichayak-app",
  storageBucket: "kshatriyaparichayak-app.firebasestorage.app",
  messagingSenderId: "1092380036176",
  appId: "1:1092380036176:web:9b8988cf06a1317f5e5555"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Redirect result handle
getRedirectResult(auth)
  .then((result) => {
    if (result) {
      const user = result.user;
      alert("Welcome " + user.displayName);
      console.log(user);
    }
  })
  .catch((error) => {
    console.error(error);
  });

// ✅ Button click login
window.login = function () {
  signInWithRedirect(auth, provider);
};