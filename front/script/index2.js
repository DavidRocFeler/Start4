document.addEventListener('DOMContentLoaded', function () {
    const mainLinks = document.querySelectorAll('.mainLink');
    const submenus = document.querySelectorAll('.submenu');

    mainLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const currentSubmenu = submenus[index];
            const isHidden = currentSubmenu.classList.contains('hidden');

            // Ocultar todos los submenús
            submenus.forEach(submenu => submenu.classList.add('hidden'));

            // Si estaba oculto, mostrar el submenú actual
            if (isHidden) {
                currentSubmenu.classList.remove('hidden');
            } else {
                currentSubmenu.classList.add('hidden');
            }
        });
    });

    // Evitar que los submenús se cierren cuando se hace clic dentro de ellos
    submenus.forEach(submenu => {
        submenu.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });

    // Cerrar los submenús cuando se hace clic fuera de ellos
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = [...mainLinks, ...submenus].some(element => element.contains(event.target));

        if (!isClickInsideMenu) {
            submenus.forEach(submenu => submenu.classList.add('hidden'));
        }
    });
});
