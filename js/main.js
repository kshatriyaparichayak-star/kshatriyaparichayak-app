// 🔥 Firebase CDN imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 🔑 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDo7HW-0Awi3ddYWdxbmSB4zQUoxvZMEb4",
  authDomain: "kshatriyaparichayak-app.firebaseapp.com",
  projectId: "kshatriyaparichayak-app",
  storageBucket: "kshatriyaparichayak-app.firebasestorage.app",
  messagingSenderId: "1092380036176",
  appId: "1:1092380036176:web:9b8988cf06a1317f5e5555"
};

// 🚀 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 🔄 Redirect result handle (IMPORTANT)
getRedirectResult(auth)
  .then((result) => {
    if (result) {
      const user = result