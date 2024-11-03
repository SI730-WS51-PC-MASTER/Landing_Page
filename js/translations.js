// Diccionario de traducciones
const translations = {
    // English
    en: {
        /* nav */
        home: "Home",
        about_us: "About Us",
        contact_us: "Contact Us",
        help_center: "Help Center",
        log_in: "LOG IN",
        /* index.html */
        txtBanner: "Find what defines you <br> No fear of success",
        subtxtBanner: "Just a few clicks away and you will find what you are looking for",
        get_started: "GET STARTED",
        button: "TRANSLATE TO SPANISH",
        /* about-us.html */
        title1: "About Us",
        paragraph1: "We are a startup dedicated to guiding people with little knowledge of computer hardware <br> Through our website and application, we offer personalized recommendations based on the user's needs and budget, always looking for the best prices and the best stores",
        title2: "MISSION",
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
        /* access.html */
        main_title: "Log In",
        user_input: "User",
        password_input: "Password",
        log_in_submit: "Submit",
        forgot_password: "Forgot your password?",
        success_message: "Login successfully!",
        alert_message: "Please enter both username and password.",
        /* contact.html */
        contact_title1: "Contact Us",
        find_us: "Find us",
        get_in_touch: "Get in touch",
        send_message: "Send Message",
        /* pc-master-software section */
        software_title: "PC Master",
        software_description: "A hardware component search and support software that connects ordinary users with hardware technicians",
        software_cta: "Don't know which components for your PC to choose?",
        /* help-center.html */
        help_center_title: "Our Plans",
        doubt_quotes: "We help you resolve any questions you may have about the purchasing process, the components we use, payment methods, shipping, and everything you need to know before purchasing a product at PCMaster."
    },
    // Spanish
    es: {
        /* nav */
        home: "Inicio",
        about_us: "Nosotros",
        contact_us: "Contáctanos",
        help_center: "Ayuda",
        log_in: "INGRESAR",
        /* index.html */
        txtBanner: "Encuentra lo que te define <br> sin miedo al éxito",
        subtxtBanner: "Solo unos cuantos clics de distancia y encontrarás lo que buscas",
        get_started: "COMENZAR",
        button: "TRADUCIR AL INGLÉS",
        /* about-us.html */
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
        /* access.html */
        main_title: "Iniciar Sesión",
        user_input: "Usuario",
        password_input: "Contraseña",
        log_in_submit: "Enviar",
        forgot_password: "¿Olvidaste tu contraseña?",
        success_message: "¡Inicio de sesión exitoso!",
        alert_message: "Por favor, ingrese tanto el usuario como la contraseña.",
        /* contact.html */
        contact_title1: "Contáctanos",
        find_us: "Encuéntranos aquí",
        get_in_touch: "Ponte en contacto",
        send_message: "Enviar correo",
        /* pc-master-software section */
        software_title: "PC Master",
        software_description: "Un software de búsqueda y soporte de componentes de hardware que conecta a usuarios comunes con técnicos de hardware",
        software_cta: "¿No sabes qué componentes elegir para tu PC?",
        /* help-center.html */
        help_center_title: "Centro de Ayuda",
        doubt_quotes: "Te ayudamos a resolver las dudas sobre el proceso de compra, componentes que utilizamos, formas de pago, envíos, y todo lo necesario antes de adquirir un producto en PCMaster."
    }
};

// Función para aplicar el idioma actual según la página
function applyLanguage() {
    const page = document.body.dataset.page; // Cada página debe tener su `data-page` en `<body>`

    // Verifica si el nav existe antes de actualizarlo
    const navHome = document.getElementById('home');
    const navAboutUs = document.getElementById('about_us');
    const navContactUs =  document.querySelector('.contact_us');
    const navHelpCenter = document.querySelector('.help_center');
    const navLogIn = document.querySelector('.log_in');

    if (navHome) navHome.innerHTML = translations[language].home;
    if (navAboutUs) navAboutUs.innerHTML = translations[language].about_us;
    if (navContactUs) navContactUs.innerHTML = translations[language].contact_us;
    if (navHelpCenter) navHelpCenter.innerHTML = translations[language].help_center;
    if (navLogIn) navLogIn.innerHTML = translations[language].log_in;

    if (page === 'index') {
        document.getElementById('languageButton').innerHTML = translations[language].button;
        document.getElementById('txtBanner').innerHTML = translations[language].txtBanner;
        document.getElementById('subtxtBanner').innerHTML = translations[language].subtxtBanner;
        document.getElementById('get_started').innerHTML = translations[language].get_started;
        document.getElementById('software-title').innerHTML = translations[language].software_title;
        document.querySelector('.software-description').innerHTML = translations[language].software_description;
        document.querySelector('.software-cta p').innerHTML = translations[language].software_cta;
    } 
    
    if (page === 'about-us') {
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
    if (page === 'contact') {
        document.getElementById('contact_title1').innerHTML = translations[language].contact_title1;
        document.getElementById('find_us').innerHTML = translations[language].find_us;
        document.getElementById('get_in_touch').innerHTML = translations[language].get_in_touch;
        document.getElementById('send_message').setAttribute('value', translations[language].send_message);
    }
    if (page === 'help-center') {
        document.getElementById('help_center_title').innerHTML = translations[language].help_center_title;
        document.querySelector('.doubt_quotes').innerHTML = translations[language].doubt_quotes;
    }
    if (page === 'access') {
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
    let savedLanguage = localStorage.getItem('selectedLanguage');
    if (!savedLanguage) {
        savedLanguage = 'en'; // Idioma predeterminado
        localStorage.setItem('selectedLanguage', savedLanguage);
    }
    language = savedLanguage;
    applyLanguage();

    const languageButton = document.getElementById('languageButton');
    if (languageButton) {
        languageButton.addEventListener('click', changeLanguage);
    }
});

// Adaptar mensaje y alerta del login para el idioma seleccionado
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".main_form");
    const messageDiv = document.querySelector(".message");
    
    if (form) {
        messageDiv.style.display = "none";
        
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const userInput = document.getElementById("user_input").value.trim();
            const passwordInput = document.getElementById("password_input").value.trim();

            if (userInput !== "" && passwordInput !== "") {
                messageDiv.textContent = translations[language].success_message;
                messageDiv.style.display = "block";
                
                setTimeout(function() {
                    messageDiv.style.display = "none";
                }, 5000);
            } else {
                alert(translations[language].alert_message);
            }
        });
    }
});
