const nosotros = document.querySelector("#nosotros");
const servicios = document.querySelector("#servicios");
const team_designer = document.querySelector("#team_designer");

/*Menu NOSOTROS */
nosotros.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".nosotros");
    sectionS.scrollIntoView({ behavior: "smooth" });
})


/*Menu SERVICIOS */
servicios.addEventListener("click", (p) => {
    p.preventDefault();

    const sectionP = document.querySelector(".servicios");
    sectionP.scrollIntoView({ behavior: "smooth" });
})

/*Menu TEAM DESIGNER */
team_designer.addEventListener("click", (t) => {
    t.preventDefault();

    const sectionT = document.querySelector(".team_designer");
    sectionT.scrollIntoView({ behavior: "smooth" });
})
/*Menu desplegable para dispositivos móviles*/
document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById('toggleBtn');
    var navList = document.querySelector('nav ul');

    toggleBtn.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    // Cierra el menu cuando se hace clic en un enlace
    var navLinks = document.querySelectorAll('nav ul li a');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function () {
            navList.classList.remove('show');
        });
    }
});
