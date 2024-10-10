// Function to set the page title
function setTitle(newTitle) {
    const titleElement = document.getElementById('page-title');
    titleElement.textContent = newTitle || 'Welcome to My Page'; // Reset to default if empty
}

// Function to set the page description
function setDescription(newDescription) {
    const descriptionElement = document.getElementById('page-description');
    descriptionElement.textContent = newDescription || 'This is a customizable page using JavaScript functions.'; // Reset to default if empty
}

// Function to set the background color
function setBackgroundColor(color) {
    document.body.style.backgroundColor = color || ''; // Reset if empty
}

// Function to set the font color
function setFontColor(color) {
    document.body.style.color = color || ''; // Reset if empty
}

// Function to set the theme
function setTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme'); // Remove existing themes
    if (theme === 'light') {
        document.body.classList.add('light-theme');
    } else if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

