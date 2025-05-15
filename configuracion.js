document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dataForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

        // Captura los valores de los campos
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        

        // Crea un objeto con los datos
        const formData = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            
        };

        // Guarda los datos en LocalStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Redirige a la segunda página
        window.location.href = 'display.html';
    });
});
