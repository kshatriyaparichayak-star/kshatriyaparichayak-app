// Firebase CDN imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDo7HW-0Awi3ddYWdxbmSB4zQUoxvZMEb4",
  authDomain: "kshatriyaparichayak-app.firebaseapp.com",
  projectId: "kshatriyaparichayak-app",
  storageBucket: "kshatriyaparichayak-app.firebasestorage.app",
  messagingSenderId: "1092380036176",
  appId: "1:1092380036176:web:9b8988cf06a1317f5e5555",
  measurementId: "G-1R11FV5445"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

console.log("App Started 🚀");

// Login function
window.login = function () {
  signInWithRedirect(auth, provider);
};

// Redirect result handle
getRedirectResult(auth)
  .then(async (result) => {
    if (result) {
      const user = result.user;

      // Save user in Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        createdAt: new Date().toISOString()
      });

      alert("Welcome " + user.displayName);
      console.log("User saved ✅", user);
    }
  })
  .catch((error) => {
    console.error("Redirect Error ❌", error);
  });

// Auto login state check
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged in ✅", user.email);
  } else {
    console.log("No user");
  }
});