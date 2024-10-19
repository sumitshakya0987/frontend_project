function toggleMobileMenu() {
    const items = document.querySelector('.items');
    const menuIcon = document.getElementById('menu-icon');
    items.classList.toggle('open');

    // Toggle the menu icon image
    if (items.classList.contains('open')) {
        menuIcon.src = 'Images/close-tab.png'; // Update with the path to your close icon
        menuIcon.alt = 'Close Menu';
    } else {
        menuIcon.src = 'Images/menu.png'; // Update with the path to your menu icon
        menuIcon.alt = 'Open Menu';
    }
}