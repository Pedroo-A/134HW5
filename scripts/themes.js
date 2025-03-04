var themeToggleButton = document.getElementById("themeToggleButton");
var themeIcon = document.getElementById("themeIcon");

function setTheme(theme) {
    var root = document.documentElement;
    if (theme === "dark") {
        root.style.setProperty("--bg-color", "#121212");
        root.style.setProperty("--text-color", "#f0f0f0");
        root.style.setProperty("--primary-color", "#1f1f1f");
        root.style.setProperty("--secondary-color", "#2b2b2b");
        themeIcon.textContent = "🌙";
    } else {
        root.style.setProperty("--bg-color", "#ffffff");
        root.style.setProperty("--text-color", "#000000");
        root.style.setProperty("--primary-color", "#f0f0f0");
        root.style.setProperty("--secondary-color", "#ffffff");
        themeIcon.textContent = "☀️";
    }
}

function toggleTheme() {
    var currentTheme = localStorage.getItem("theme") || "light";
    var newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
}

// On page load, apply the saved theme (defaults to light)
var savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

// Set up the click listener on the theme toggle button
if (themeToggleButton) {
    themeToggleButton.addEventListener("click", toggleTheme);
}
