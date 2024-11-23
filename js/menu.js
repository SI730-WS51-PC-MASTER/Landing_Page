const about_us = document.querySelector("#about-us-section");
if (about_us) {
    about_us.addEventListener("click", (s) => {
        s.preventDefault();
        const sectionS = document.querySelector(".about_us");
        sectionS.scrollIntoView({ behavior: "smooth" });
    });
}

const services = document.querySelector("#services-section");
if (services) {
    services.addEventListener("click", (p) => {
        p.preventDefault();
        const sectionP = document.querySelector(".services");
        sectionP.scrollIntoView({ behavior: "smooth" });
    });
}

const team_designer = document.querySelector("#team-designer-section");
if (team_designer) {
    team_designer.addEventListener("click", (t) => {
        t.preventDefault();
        const sectionT = document.querySelector(".team_designer");
        sectionT.scrollIntoView({ behavior: "smooth" });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById('toggleBtn');
    var navList = document.querySelector('nav ul');
    var banner = document.querySelector('.banner'); // Selecciona el contenedor del banner

    // Función para ajustar el margen del banner
    function adjustBannerMargin() {
        if (window.innerWidth > 1000) { // Detecta pantallas grandes
            navList.classList.remove('show'); // Oculta el menú en pantallas grandes
            banner.style.marginTop = '0'; // Restablece el margen superior en pantallas grandes
        } else if (navList.classList.contains('show')) {
            banner.style.marginTop = '400px'; // Si el menú está abierto en pantallas pequeñas, ajusta el margen
        }
    }

    toggleBtn.addEventListener('click', function () {
        navList.classList.toggle('show');
        
        // Ajusta el margen del banner al hacer clic en el toggle
        if (navList.classList.contains('show')) {
            banner.style.marginTop = '400px';
        } else {
            banner.style.marginTop = '0';
        }
    });

    // Cierra el menú y restaura el banner cuando se hace clic en un enlace del menú
    var navLinks = document.querySelectorAll('nav ul li a');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function () {
            navList.classList.remove('show');
            banner.style.marginTop = '0';
        });
    }

    // Detecta el cambio de tamaño de la ventana para ajustar el banner
    window.addEventListener('resize', adjustBannerMargin);

    // Ajusta el margen al cargar la página, dependiendo del tamaño inicial
    adjustBannerMargin();
});

