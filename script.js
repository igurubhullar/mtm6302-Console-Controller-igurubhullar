
function setTitle(newTitle) {
    const titleElement = document.getElementById("pageTitle");
    titleElement.textContent = newTitle || "Welcome to My Page";
}

function setDescription(newDescription) {
    const descriptionElement = document.getElementById("pageDescription");
    descriptionElement.textContent = newDescription || "This is a customizable page. Use the console to change its appearance.";
}

function setBackgroundColor(color) {
    document.body.style.backgroundColor = color || "";
}

function setFontColor(color) {
    document.body.style.color = color || "";
}

function setTheme(theme) {
    if (theme === "dark") {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    } else if (theme === "light") {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
}
