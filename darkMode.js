const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

const iconToggle = () => {
  moon.classList.toggle("display-none");
  sun.classList.toggle("display-none");
};

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moon.classList.add("display-none");
    return;
  }
  sun.classList.add("display-none");
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.contains("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

sun.addEventListener("click", () => {
  themeSwitch();
});

moon.addEventListener("click", () => {
  themeSwitch();
});

themeCheck();
