document.addEventListener('DOMContentLoaded', function() {
    // Recupera los datos del LocalStorage
    const storedData = localStorage.getItem('formData');

    if (storedData) {
        const formData = JSON.parse(storedData);

        // Muestra los datos en los elementos correspondientes
        document.getElementById('displayNombre').textContent = formData.nombre;
        document.getElementById('displayApellido').textContent = formData.apellido;
        document.getElementById('displayEmail').textContent = formData.email;
        

        // Limpia el LocalStorage después de mostrar los datos (opcional)
        localStorage.removeItem('formData');
    } else {
        // Si no hay datos en LocalStorage, muestra un mensaje
        document.getElementById('dataDisplay').innerHTML = '<p>No hay datos disponibles.</p>';
    }
});
