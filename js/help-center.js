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
                "Este botón mostrará información sobre el proceso de ensamblaje.",
                "Este botón mostrará información sobre las garantías.",
                "Este botón mostrará información sobre los envíos internacionales.",
                "Este botón mostrará información sobre las políticas de devolución.",
                "Este botón mostrará los términos y condiciones de uso."
            ];

            // Mostrar el texto correspondiente
            textBox.textContent = texts[index];

            // Alternar la visibilidad del cuadro de texto
            textBox.classList.toggle("active");
        });
    });
});
