// Captura el evento de envío del formulario
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional
    var form = this;
    // Crea un objeto FormData para enviar los datos del formulario
    var formData = new FormData(this);

    // Envía el formulario usando fetch API
    fetch('./back/index.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Muestra la alerta de éxito
        Swal.fire({
            title: 'Success!',
            text: 'Form Submitted Successfully!',
            icon: 'success',
            confirmButtonText: 'Ok',
            customClass: {
                title: 'my-title', // Clase personalizada para el título
                content: 'my-content' // Clase personalizada para el contenido
            }
        }).then(() => {
            form.reset();
        })
    })
    .catch(error => {
        console.error('Error:', error);
        Swal.fire({
            title: 'Error!',
            text: 'There was a problem submitting the form.',
            icon: 'error',
            confirmButtonText: 'Ok',
            customClass: {
                title: 'my-title', // Clase personalizada para el título
                content: 'my-content' // Clase personalizada para el contenido
            }
        });
    });
});