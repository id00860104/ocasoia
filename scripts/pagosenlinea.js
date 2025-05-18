document.addEventListener('DOMContentLoaded', function() {
    const addPagoBtn = document.getElementById('addPagoBtn');
    const viewPagoBtn = document.getElementById('viewPagoBtn');
    const addPagoModal = document.getElementById('addPagoModal');
    const viewPagoModal = document.getElementById('viewPagoModal');
    const savePagoBtn = document.getElementById('savePagoBtn');
    const pagoList = document.getElementById('pagoList');
    const closeButtons = document.querySelectorAll('.close-button');

    const localStorageKey = 'pagos'; // Clave para almacenar en LocalStorage

    // Función para obtener los pagos del LocalStorage
    function getPagos() {
        const storedPagos = localStorage.getItem(localStorageKey);
        return storedPagos ? JSON.parse(storedPagos) : [];
    }

    // Función para guardar los pagos en el LocalStorage
    function savePagos(pagos) {
        localStorage.setItem(localStorageKey, JSON.stringify(pagos));
    }


    function showCustomNotification(message) {
        notification.textContent = message;
        notification.style.display = 'block';
        // Reinicia la animación para que se reproduzca cada vez
        notification.style.animation = 'none';
        notification.offsetHeight; // Truco para reiniciar la animación
        notification.style.animation = 'slideIn 0.5s forwards, slideOut 0.5s 4s forwards';
    }

    // Inicializa los pagos desde el LocalStorage
    let pagos = getPagos();

    // Función para mostrar la ventana modal
    function showModal(modal) {
        modal.style.display = "block";
    }

    // Función para ocultar la ventana modal
    function hideModal(modal) {
        modal.style.display = "none";
    }

    // Evento para abrir la ventana modal de añadir destinatario
    addPagoBtn.addEventListener('click', function() {
        showModal(addPagoModal);
    });

    // Evento para abrir la ventana modal de ver y eliminar recordatorios
    viewPagoBtn.addEventListener('click', function() {
        updatePagoList();
        showModal(viewPagoModal);
    });

    // Eventos para cerrar las ventanas modales
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            hideModal(button.closest('.modal'));
        });
    });

    // Evento para guardar el pago
    savePagoBtn.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const lastName = document.getElementById('lastName').value;

        if (name && lastName) {
            pagos.push({ name: name, lastName: lastName });
            savePagos(pagos); // Guarda en LocalStorage
            document.getElementById('name').value = '';
            document.getElementById('lastName').value = '';
            hideModal(addPagoModal);
            updatePagoList(); // Actualiza la lista después de guardar
            showCustomNotification('¡Destinatario de pago añadido!'); // Mostrar notificación
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });

    // Función para actualizar la lista de recordatorios en la ventana modal
    function updatePagoList() {
        pagoList.innerHTML = '';
        pagos.forEach(function(pago, index) {
            const listItem = document.createElement('li');
            listItem.textContent = `${pago.name} ${pago.lastName}`;
            listItem.addEventListener('click', function() {
                removePago(index);
            });
            pagoList.appendChild(listItem);
        });
    }

    // Función para eliminar un recordatorio
    function removePago(index) {
        pagos.splice(index, 1);
        savePagos(pagos); // Guarda en LocalStorage
        updatePagoList();
        showCustomNotification('¡Destinatario de pago eliminado!'); // Mostrar notificación
    }

    // Cerrar la ventana modal si se hace clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            hideModal(event.target);
        }
    });

    // Actualiza la lista de recordatorios al cargar la página
    updatePagoList();
});



'use strict';

const elemToggleFunc = function(elem){ elem.classList.toggle('active'); }

const navbar = document.querySelector('[data-navbar]');
const navOpenBtn = document.querySelector('[data-nav-open-btn]');
const navCloseBtn = document.querySelector('[data-nav-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const navElemArr = [navCloseBtn, navOpenBtn, overlay];

for(let i = 0; i < navElemArr.length; i++ ) {
    navElemArr[i].addEventListener('click', function () { 
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
    })
}



const header = document.querySelector('[data-header]');

window.addEventListener('scroll', function(){
    if(window.scrollY >= 10) { header.classList.add('active'); 
    } else { header.classList.remove('active'); }
})

