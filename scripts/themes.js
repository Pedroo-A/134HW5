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


var savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);


if (themeToggleButton) {
    themeToggleButton.addEventListener("click", toggleTheme);
    themeToggleButton.style.display = "inline-block";
}
