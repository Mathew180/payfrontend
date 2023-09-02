// script.js
const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');
const sidebarContent = document.querySelector('.sidebar-content');

function toggleSidebar() {
    const isMobile = window.innerWidth <= 768; // Adjust the width as needed
    if (isMobile) {
        sidebar.classList.toggle('collapsed');
        sidebarContent.classList.toggle('expanded');
    } else {
        // If the screen size is larger, make sure the sidebar is expanded
        sidebar.classList.remove('collapsed');
        sidebarContent.classList.add('expanded');
    }
}

toggleButton.addEventListener('click', toggleSidebar);

// Add an event listener to collapse sidebar on window resize
window.addEventListener('resize', () => {
    toggleSidebar();
});

// Initial check when the page loads
toggleSidebar();
