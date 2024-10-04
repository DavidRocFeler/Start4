document.addEventListener('DOMContentLoaded', () => {
    const leftContainer = document.querySelector('.leftContainer');
    const main = document.querySelector('main');
    const clickIndicator = document.querySelector('.clickIndicator');
    const menuIcon = document.querySelector('.menu-icon');

    clickIndicator.addEventListener('click', () => {
        leftContainer.classList.toggle('expanded');
        toggleIndicatorVisibility();
    });

    menuIcon.addEventListener('click', () => {
        leftContainer.classList.toggle('expanded');
        toggleIndicatorVisibility();
    });

    main.addEventListener('click', (event) => {
        const clickX = event.clientX;
        const mainWidth = main.offsetWidth;
        const limit = mainWidth * 0.1; // 10% izquierdo de main

        if (clickX <= limit) {
            leftContainer.classList.add('expanded');
            toggleIndicatorVisibility();
        } else {
            leftContainer.classList.remove('expanded');
            toggleIndicatorVisibility();
        }
    });

    leftContainer.addEventListener('click', (event) => {
        event.stopPropagation(); // Evitar que el clic en leftContainer cierre el menú
    });

    function toggleIndicatorVisibility() {
        if (leftContainer.classList.contains('expanded')) {
            clickIndicator.style.display = 'none';
            menuIcon.style.display = 'none';
        } else {
            clickIndicator.style.display = 'block';
            menuIcon.style.display = 'block';
        }
    }
});
