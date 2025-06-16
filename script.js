document.addEventListener('DOMContentLoaded', () => {
    const pawButtons = document.querySelectorAll('.paw-button');
    const infoDisplay = document.getElementById('info-display');
    const feedbackForm = document.getElementById('feedback-form');

    // Contenido para cada botón
    const buttonContent = {
        'info-medio-ambiente': `
            <h3>Medio Ambiente en el Plantel 20</h3>
            <p>El Plantel 20 del Valle se esfuerza por ser un ejemplo en el cuidado del medio ambiente. Nuestras iniciativas incluyen:</p>
            <ul>
                <li>**Programas de reciclaje** de papel, plástico y orgánicos.</li>
                <li>**Reducción del consumo de energía** mediante el uso eficiente de la luz natural y equipos.</li>
                <li>**Campañas de concientización** sobre el uso responsable del agua.</li>
                <li>**Mantenimiento y expansión de áreas verdes** dentro del plantel.</li>
                <li>**Promoción de un transporte más sostenible** entre la comunidad escolar.</li>
            </ul>
            <p>¡Tu participación es crucial para un futuro más verde!</p>
        `,
        'info-alimentacion': `
            <h3>Alimentación Saludable para la Comunidad Escolar</h3>
            <p>Fomentar una alimentación saludable es fundamental para el bienestar y rendimiento de nuestros estudiantes y personal:</p>
            <ul>
                <li>Ofrecemos **opciones de alimentos nutritivos** en la cafetería escolar.</li>
                <li>Organizamos **talleres de cocina saludable** y charlas sobre nutrición.</li>
                <li>Promovemos el **consumo de frutas y verduras frescas.**</li>
                <li>**Desincentivamos el consumo de bebidas azucaradas** y alimentos ultraprocesados.</li>
                <li>Creamos conciencia sobre la importancia de un **desayuno balanceado.**</li>
            </ul>
            <p>Una buena alimentación es la base de una mente y cuerpo sanos.</p>
        `,
        'info-acciones': `
            <h3>Actividades y Acciones de Colaboración</h3>
            <p>La comunidad del Plantel 20 se une para implementar cambios significativos:</p>
            <ul>
                <li>**Jornadas de Limpieza:** Eventos mensuales para mantener limpio nuestro entorno.</li>
                <li>**Huerto Escolar:** Cultivamos nuestras propias verduras y hierbas, aprendiendo sobre sostenibilidad.</li>
                <li>**Recolección de Tapitas:** Campaña permanente para apoyar causas sociales y medioambientales.</li>
                <li>**Concursos de Reciclaje Creativo:** Estimulamos la creatividad y el reciclaje entre los estudiantes.</li>
                <li>**Semana del Medio Ambiente:** Charlas, talleres y actividades especiales cada año.</li>
            </ul>
            <p>¡Hay muchas formas de involucrarte y hacer la diferencia!</p>
        `,
        'info-sugerencias': `
            <h3>Sugerencias y Propuestas de Mejora</h3>
            <p>Siempre estamos buscando nuevas ideas para mejorar. Aquí algunas propuestas en discusión:</p>
            <ul>
                <li>**Instalación de bebederos con filtro** para reducir el uso de botellas de plástico.</li>
                <li>Creación de un **"Club Verde"** estudiantil para liderar iniciativas.</li>
                <li>Implementación de un sistema de **compostaje a gran escala** para residuos orgánicos.</li>
                <li>Promoción de **"Lunes sin Carne"** en la cafetería.</li>
                <li>Programas de **intercambio de ropa y libros** para fomentar la economía circular.</li>
            </ul>
            <p>¡Anímate a compartir tus propias ideas en nuestro formulario!</p>
        `,
        'info-formulario': `
            <h3>Comparte tus Propuestas y Comentarios</h3>
            <p>¡Nos encantaría escuchar tus ideas y comentarios sobre nuestras iniciativas!</p>
            <p>Por favor, utiliza el formulario de abajo para enviarnos tus sugerencias. Tu voz es fundamental para seguir construyendo un mejor Plantel 20.</p>
            <p>Te invitamos a desplazarte hasta el final de la página para encontrar el formulario de contacto.</p>
        `
    };

    // Event listener para los botones de huella
    pawButtons.forEach(button => {
        button.addEventListener('click', () => {
            const infoKey = button.dataset.info;
            if (buttonContent[infoKey]) {
                infoDisplay.innerHTML = buttonContent[infoKey];
                // Desplazamiento suave hacia la sección de información
                infoDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                infoDisplay.innerHTML = '<p>No hay información disponible para este botón.</p>';
            }
        });
    });

    // Envío del formulario (solo en el lado del cliente, para demostración)
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío de formulario por defecto

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const propuesta = document.getElementById('propuesta').value;

        // En una aplicación real, enviarías estos datos a un servidor usando Fetch API o XMLHttpRequest
        console.log('Formulario Enviado:');
        console.log('Nombre:', nombre);
        console.log('Email:', email);
        console.log('Propuesta/Comentario:', propuesta);

        alert('¡Gracias por tu propuesta/comentario! Lo hemos recibido.');

        feedbackForm.reset(); // Limpia el formulario
    });
});

