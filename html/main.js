// Function to include HTML content
function includeHTML(sectionId, filePath) {
    var section = document.getElementById(sectionId);

    // Use fetch API to load HTML content
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            section.innerHTML = html;
        })
        .catch(error => console.error('Error fetching HTML:', error));
}
// DROPDPWN FUNCTIONS
function includeDropdown(file, containerId) {
    const container = document.getElementById(containerId);
    fetch(file)
        .then(response => response.text())
        .then(content => {
            container.innerHTML = content;
        });
}

function toggleOptionsDropdown() {
    includeDropdown('options-dropdown.html', 'headerContainer');
}

function toggleSettingsDropdown() {
    includeDropdown('settings-dropdown.html', 'headerContainer');
}


// Include the Header Section
includeHTML('header-section', 'header-section.html');

// Include the Navigation Bar Section
includeHTML('navbar-section', 'navbar-section.html');

includeHTML('dropdown', 'options-sectionDD.html');
// NAVIGATION FUNCTIONS

function goToHomePage() {
    window.location.href = "index.html";
}

function goToProfilePage() {
    window.location.href = "profile.html";
}

function goToAddTaskPage() {

}

function goToCalendarPage() {

}

function goToAlertPage() {

}

function goBack() {
    window.location.href = "index.html";
}