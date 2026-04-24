import { initAuth, handleRedirect, checkUser } from "./features/auth.js";

console.log("App Started 🚀");

// ✅ DOM ready होने के बाद ही सब चलाओ
window.addEventListener("DOMContentLoaded", async () => {
  await handleRedirect();   // पहले redirect handle
  checkUser();              // फिर user check
  initAuth();               // फिर button attach
});