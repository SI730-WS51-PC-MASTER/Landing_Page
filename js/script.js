// Diccionario de traducciones
const translations = {
    en: {
        home: "Home",
        about_us: "About Us",
        services: "Services",
        team_designer: "The Team",
        log_in: "   LOG IN   ",
        txtBanner: "Find what defines you <br> No fear of success",
        subtxtBanner: "Just a few clicks away and you will find what you are looking for",
        get_started: "GET STARTED",
        button: "TRADUCIR AL ESPAÑOL",
        title1: "About Us",
        paragraph1: "We are a startup dedicated to guiding people with little knowledge of computer hardware <br> Through our website and application, we offer personalized recommendations based on the user's needs and budget, always looking for the best prices and the best stores",
        title2: "MISION",
        paragraph2: "Guide and connect users with the ideal hardware, backed by transparency and education",
        title3: "VISION",
        paragraph3: "To be leaders in the advice and selection of computer hardware",
        title4: "Services",
        title5: "Personalized Advice",
        paragraph4: "Get personalized PC component recommendations based on your budget and needs",
        title6: "Price Comparison",
        paragraph5: "Explore and compare prices for a wide variety of components from different online stores",
        title7: "Expanded Search with Deep Learning",
        paragraph6: "Expand your options with Deep Learning technology, identifying products even in social media posts",
        title8: "The Team",
        main_title: "Log In",
        user_input: "User",
        password_input: "Password",
        log_in_submit: "Submit",
        forgot_password: "Forgot your password?"
    },
    es: {
        home: "Inicio",
        about_us: "Nosotros",
        services: "Servicios",
        team_designer: "El Equipo",
        log_in: "INICIAR SESION",
        txtBanner: "Encuentra lo que te define <br> sin miedo al éxito",
        subtxtBanner: "Solo unos cuantos clicks de distancia y encontrarás lo que buscas",
        get_started: "COMENZAR",
        button: "TRANSLATE TO ENGLISH",
        title1: "Nosotros",
        paragraph1: "Somos una startup dedicada a guiar a personas con poco conocimiento en hardware de computadoras <br> A través de nuestra página web y aplicación, ofrecemos recomendaciones personalizadas basadas en las necesidades <br> y presupuesto del usuario, buscando siempre los mejores precios y las mejores tiendas",
        title2: "MISIÓN",
        paragraph2: "Orientar y conectar a usuarios con el hardware ideal, respaldados por la transparencia y la educación",
        title3: "VISIÓN",
        paragraph3: "Ser líderes referentes en el asesoramiento y elección de hardware para computadoras",
        title4: "Servicios",
        title5: "Asesoramiento Personalizado",
        paragraph4: "Recibe recomendaciones personalizadas de componentes de PC basadas en tu presupuesto y necesidades",
        title6: "Comparación de Precios",
        paragraph5: "Explora y compara precios de una amplia variedad de componentes en diferentes tiendas en línea",
        title7: "Búsqueda Ampliada con Deep Learning",
        paragraph6: "Amplía tus opciones con tecnología de Deep Learning, identificando productos incluso en publicaciones de redes sociales",
        title8: "El Equipo",
        main_title: "Iniciar Sesión",
        user_input: "Usuario",
        password_input: "Contraseña",
        log_in_submit: "Enviar",
        forgot_password: "¿Olvidaste tu contraseña?"
    }
};

// Función para aplicar el idioma actual sin cambiarlo
function applyLanguage() {
    // Actualizar el contenido en index.html (si existe)
    if (document.getElementById('home')) {
        document.getElementById('home').innerHTML = translations[language].home;
        document.getElementById('about_us').innerHTML = translations[language].about_us;
        document.getElementById('services').innerHTML = translations[language].services;
        document.getElementById('team_designer').innerHTML = translations[language].team_designer;
        document.getElementById('languageButton').innerHTML = translations[language].button;
        document.querySelector('.log_in').innerHTML = translations[language].log_in;
        document.getElementById('txtBanner').innerHTML = translations[language].txtBanner;
        document.getElementById('subtxtBanner').innerHTML = translations[language].subtxtBanner;
        document.getElementById('get_started').innerHTML = translations[language].get_started;
        document.getElementById('title1').innerHTML = translations[language].title1;
        document.getElementById('paragraph1').innerHTML = translations[language].paragraph1;
        document.getElementById('title2').innerHTML = translations[language].title2;
        document.getElementById('paragraph2').innerHTML = translations[language].paragraph2;
        document.getElementById('title3').innerHTML = translations[language].title3;
        document.getElementById('paragraph3').innerHTML = translations[language].paragraph3;
        document.getElementById('title4').innerHTML = translations[language].title4;
        document.getElementById('title5').innerHTML = translations[language].title5;
        document.getElementById('paragraph4').innerHTML = translations[language].paragraph4;
        document.getElementById('title6').innerHTML = translations[language].title6;
        document.getElementById('paragraph5').innerHTML = translations[language].paragraph5;
        document.getElementById('title7').innerHTML = translations[language].title7;
        document.getElementById('paragraph6').innerHTML = translations[language].paragraph6;
        document.getElementById('title8').innerHTML = translations[language].title8;
    }

    // Actualizar el contenido en access.html (si existe)
    if (document.querySelector('.main_title')) {
        document.querySelector('.main_title').innerHTML = translations[language].main_title;
        document.getElementById('user_input').setAttribute('placeholder', translations[language].user_input);
        document.getElementById('password_input').setAttribute('placeholder', translations[language].password_input);
        document.getElementById('log_in_submit').setAttribute('value', translations[language].log_in_submit);
        document.getElementById('forgot_password').innerHTML = translations[language].forgot_password;
    }
}

// Función para cambiar de idioma y almacenar en localStorage
function changeLanguage() {
    language = language === 'es' ? 'en' : 'es'; // Alternar entre inglés y español
    localStorage.setItem('selectedLanguage', language); // Guardar idioma en localStorage
    applyLanguage(); // Aplicar el idioma seleccionado
}

// Cargar idioma guardado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Cambiar el valor predeterminado a 'en' (inglés)
    let savedLanguage = localStorage.getItem('selectedLanguage');
    if (!savedLanguage) {
        // Si no hay idioma guardado, establece 'en' por defecto
        savedLanguage = 'en';
        localStorage.setItem('selectedLanguage', savedLanguage); // Guardar inglés como idioma predeterminado
    }
    language = savedLanguage; // Establecer el idioma según lo guardado o predeterminado
    applyLanguage(); // Aplicar el idioma almacenado

    document.getElementById('languageButton').addEventListener('click', changeLanguage); // Solo cambiar al hacer clic
});
