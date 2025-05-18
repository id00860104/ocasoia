document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dataForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

        // Captura los valores de los campos
        const nsocial = document.getElementById('nsocial').value;
        const operaciones = document.getElementById('operaciones').value;
        const alergias = document.getElementById('alergias').value;
        

        // Crea un objeto con los datos
        const formData = {
            nsocial: nsocial,
            operaciones: operaciones,
            alergias: alergias,
            
        };

        // Guarda los datos en LocalStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Redirige a la página del historial clínico
        window.location.href = 'salud_historial.html';
    });
});
