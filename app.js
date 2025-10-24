const signinBtn = document.getElementById("signinBtn");
const signinSection = document.getElementById("signinSection");
const appSection = document.getElementById("appSection");

signinBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Please enter both username and password!");
    return;
  }

  // Simulate successful sign-in
  signinSection.classList.add("hidden");
  appSection.classList.remove("hidden");
});
