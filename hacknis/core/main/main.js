// Add this JavaScript code to make the tool cards interactive
const toolLinks = document.querySelectorAll('.tool-link');

toolLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#007bff';
        link.style.color = '#fff';
    });

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = 'transparent';
        link.style.color = '#007bff';
    });
});

