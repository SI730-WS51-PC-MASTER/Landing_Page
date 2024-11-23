document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is loaded!");

    // Obtener todos los botones
    const buttons = document.querySelectorAll(".column2 button");

    // Crear un evento para cada botón
    buttons.forEach((button, index) => {
        button.addEventListener("click", function() {
            console.log("Button clicked: ", index);  // Verifica que este mensaje aparezca

            // Eliminar la clase 'active' de todos los botones
            buttons.forEach(btn => btn.classList.remove("active"));

            // Agregar la clase 'active' al botón clicado
            this.classList.add("active");

            // Obtener o crear el contenedor de texto desplegable
            let textBox = this.nextElementSibling;
            if (!textBox || !textBox.classList.contains("text-box")) {
                textBox = document.createElement("div");
                textBox.classList.add("text-box");
                this.insertAdjacentElement('afterend', textBox);
            }

            // Definir el texto para cada botón según el índice
            const texts = [
                "PCMaster es una empresa dedicada a ensamblar equipos personalizados de alto rendimiento.",
                "Crear una plataforma que facilite a los usuarios sin conocimientos técnicos el proceso de búsqueda y comparación de componentes de hardware de forma sencilla y eficiente.",
                "PCMaster ofrecerá un plan gratuito que permitirá servicios a distancia y un plan premium que permitirá servicios a domicilio",
                "Para utilizar nuestra aplicación dirijite al apartado de login e ingresa a la app",
                "Los usuarios podrán realizar una estimación del servicio y valor a los técnicos en un rango de 0 a 5 estrellas",
                "Amazon, Zoom, Google"
            ];

            // Mostrar el texto correspondiente
            textBox.textContent = texts[index];

            // Alternar la visibilidad del cuadro de texto
            textBox.classList.toggle("active");
        });
    });
});
