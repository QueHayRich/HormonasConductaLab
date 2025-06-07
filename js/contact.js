document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const statusDiv = document.getElementById('form-status');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        
        showStatus('Funcionalidad de contacto temporalmente deshabilitada', 'error');
        
        // TODO: Implementar envío de correos seguro
        /*
        try {
            await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {
                // datos del formulario
            });
            showStatus('¡Mensaje enviado exitosamente!', 'success');
        } catch (error) {
            showStatus('Error al enviar mensaje', 'error');
        }
        */
    });

    function showStatus(message, type) {
        statusDiv.textContent = message;
        statusDiv.className = `form-status ${type}`;
        statusDiv.style.display = 'block';
    }
});
