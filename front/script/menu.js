document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const serviceHeader = document.querySelector('.service');
    const aboutHeader = document.querySelector('.about');
    const optionsHeader = document.querySelector('.options');
    const serviceSubMenu = document.querySelector('.links-container-1');
    const aboutSubMenu = document.querySelector('.links-container-2');
    const optionsSubMenu = document.querySelector('.links-container-3');

    // Función para cerrar todos los submenús
    function closeSubMenus() {
        serviceSubMenu.classList.remove('open');
        aboutSubMenu.classList.remove('open');
        optionsSubMenu.classList.remove('open');
    }

    // Mostrar menú al hacer clic en la hamburguesa
    hamburger.addEventListener('click', function(event) {
        event.stopPropagation(); // Evitar que el clic en la hamburguesa cierre el menú
        if (menu.classList.contains('open')) {
            closeSubMenus();
            menu.classList.remove('open');
        } else {
            closeSubMenus(); // Cerrar todos los submenús al abrir el menú principal
            menu.classList.add('open');
        }
    });

    // Mostrar submenú de Service
    serviceHeader.addEventListener('mouseover', function() {
        closeSubMenus();
        serviceSubMenu.classList.add('open');
    });

    // Mostrar submenú de About
    aboutHeader.addEventListener('mouseover', function() {
        closeSubMenus();
        aboutSubMenu.classList.add('open');
    });

    // Mostrar submenú de Options
    optionsHeader.addEventListener('mouseover', function() {
        closeSubMenus();
        optionsSubMenu.classList.add('open');
    });

    // Mantener submenús visibles mientras el mouse esté dentro de ellos
    serviceSubMenu.addEventListener('mouseleave', function() {
        serviceSubMenu.classList.remove('open');
    });

    aboutSubMenu.addEventListener('mouseleave', function() {
        aboutSubMenu.classList.remove('open');
    });

    optionsSubMenu.addEventListener('mouseleave', function() {
        optionsSubMenu.classList.remove('open');
    });

    // Cerrar menús y submenús al hacer clic fuera de ellos
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickInsideServiceSubMenu = serviceSubMenu.contains(event.target);
        const isClickInsideAboutSubMenu = aboutSubMenu.contains(event.target);
        const isClickInsideOptionsSubMenu = optionsSubMenu.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideServiceSubMenu && !isClickInsideAboutSubMenu && !isClickInsideOptionsSubMenu) {
            closeSubMenus();
            menu.classList.remove('open');
        }
    });
});

