const contactInfo = document.querySelector(".contact-info");
const contactBtn = document.getElementById("contactBtn");

const jobExp = document.querySelector(".job-exp");
const jobExpBtn = document.getElementById("jobExpBtn");

const aboutMe = document.querySelector(".about-info");
const aboutMeBtn = document.getElementById("startBtn");
const aboutMeOverlay = document.querySelector(".overlay");
const sectionCenter = document.querySelector(".section-center");

const langBtnSlo = document.getElementById("langBtnSlo");
const langBtnEng = document.getElementById("langBtnEng");

const nav = document.querySelector("nav");
const navHeader = document.querySelector(".nav-header");

const darkMode = document.getElementById("dark");

// Contact Information Toggle - triggers animation
contactBtn.addEventListener("click", () => {
  contactInfo.classList.toggle("active");
  if (jobExp.classList.contains("active")) {
    jobExp.classList.remove("active");
  }
});

// Job Experience Toggle - triggers animation
jobExpBtn.addEventListener("click", () => {
  jobExp.classList.toggle("active");
  if (contactInfo.classList.contains("active")) {
    contactInfo.classList.remove("active");
  }
});

// About Me Section toggle - triggers animation
aboutMeBtn.addEventListener("click", () => {
  aboutMe.classList.toggle("active");
  aboutMeOverlay.classList.toggle("active");
});

// Language selection btns - link to another html page
langBtnEng.addEventListener("click", (btn) => {
  if (btn.target.id === "langBtnEng") {
    document.getElementById("langBtnEng").hidden = true;
    document.getElementById("langBtnSlo").hidden = false;
  }
});

langBtnSlo.addEventListener("click", (btn) => {
  if (btn.target.id === "langBtnSlo") {
    document.getElementById("langBtnEng").hidden = false;
    document.getElementById("langBtnSlo").hidden = true;
  }
});

// Dark Mode Toggle
darkMode.addEventListener("click", () => {
  if (darkMode.classList.contains("dark")) {
    darkMode.classList.remove("dark");
    darkMode.innerHTML = `<i class="far fa-moon"></i>`;
  } else {
    darkMode.classList.add("dark");
    darkMode.innerHTML = `<i class="far fa-lightbulb"></i>`;
  }
  document.body.classList.toggle("dark");
  navHeader.classList.toggle("dark");
  aboutMeOverlay.classList.toggle("dark");
  aboutMe.classList.toggle("dark");
  jobExp.classList.toggle("dark");
  contactInfo.classList.toggle("dark");
});
