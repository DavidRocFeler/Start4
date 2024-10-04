document.addEventListener('DOMContentLoaded', () => {
    const leftContainer = document.querySelector('.leftContainer');
    const rightContainer = document.querySelector('.rightContainer');

    // Desplazamiento independiente
    leftContainer.addEventListener('mouseover', () => {
        leftContainer.style.overflowY = 'auto';
    });

    leftContainer.addEventListener('mouseout', () => {
        leftContainer.style.overflowY = 'hidden';
    });

    rightContainer.addEventListener('mouseover', () => {
        rightContainer.style.overflowY = 'auto';
    });

    rightContainer.addEventListener('mouseout', () => {
        rightContainer.style.overflowY = 'hidden';
    });
});
