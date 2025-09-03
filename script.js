// 🌗 Toggle between light and dark themes with a cosmic twist
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  themeToggle.textContent = body.classList.contains("dark-mode") ? "🌙 Toggle Theme" : "🌞 Toggle Theme";
});

// 🎯 Counter Game Logic
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const resetBtn = document.getElementById("resetBtn");
const clickCount = document.getElementById("clickCount");
const counterMessage = document.getElementById("counterMessage");

counterBtn.addEventListener("click", () => {
  count++;
  clickCount.textContent = count;
  if (count === 10) counterMessage.textContent = "10 clicks—You’re on fire! 🔥";
  else if (count === 20) counterMessage.textContent = "20 clicks—Legendary! 🏆";
  else counterMessage.textContent = "Keep going!";
});

resetBtn.addEventListener("click", () => {
  count = 0;
  clickCount.textContent = count;
  counterMessage.textContent = "Ready to click?";
});

// 🧩 Collapsible FAQ Section
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("visible");
  });
});

// 🗂️ Tabbed Interface Logic
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.add("hidden"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.remove("hidden");
  });
});

// ✅ Form Validation Logic
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  // Name validation
  if (!/^[A-Za-z]{2,}$/.test(nameInput.value)) {
    nameError.textContent = "Name must be at least 2 letters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
    emailError.textContent = "Oops! That email looks suspicious…";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (!/^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(passwordInput.value)) {
    passwordError.textContent = "Your password needs a bit more muscle 💪";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  formMessage.textContent = valid ? "✅ Form submitted successfully!" : "❌ Please fix the errors above.";
});
