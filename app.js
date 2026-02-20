// 1. Configuración de Tailwind CSS (Aplica colores y fuentes personalizadas)
tailwind.config = {
    theme: {
        extend: {
            colors: {
                cantor: {
                    blue: '#0F204B',    /* Azul Institucional */
                    yellow: '#FBBF24',  /* Amarillo Institucional */
                    light: '#F3F4F6',
                }
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'],
            }
        }
    }
};

// 2. Lógica de interactividad (Menú móvil)
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});