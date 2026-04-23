// Firebase CDN imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Config
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

// Export auth
export const auth = getAuth(app);