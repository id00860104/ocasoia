document.addEventListener('DOMContentLoaded', function() {
    const addRecordatorioBtn = document.getElementById('addRecordatorioBtn');
    const viewRecordatorioBtn = document.getElementById('viewRecordatorioBtn');
    const addRecordatorioModal = document.getElementById('addRecordatorioModal');
    const viewRecordatorioModal = document.getElementById('viewRecordatorioModal');
    const saveRecordatorioBtn = document.getElementById('saveRecordatorioBtn');
    const recordatorioList = document.getElementById('recordatorioList');
    const closeButtons = document.querySelectorAll('.close-button');

  
    
    let recordatorios = [];

    
    // Función para mostrar la ventana modal
    function showModal(modal) {
        modal.style.display = "block";
    }

    // Función para ocultar la ventana modal
    function hideModal(modal) {
        modal.style.display = "none";
    }

    // Evento para abrir la ventana modal de añadir recordatorio
    addRecordatorioBtn.addEventListener('click', function() {
        showModal(addRecordatorioModal);
    });

    // Evento para abrir la ventana modal de ver y eliminar recordatorios
    viewRecordatorioBtn.addEventListener('click', function() {
        updateRecordatorioList();
        showModal(viewRecordatorioModal);
    });

    // Eventos para cerrar las ventanas modales
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            hideModal(button.closest('.modal'));
        });
    });

    // Evento para guardar el recordatorio
    saveRecordatorioBtn.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const lastName = document.getElementById('lastName').value;

        if (name && lastName) {
            recordatorios.push({ name: name, lastName: lastName });
            document.getElementById('name').value = '';
            document.getElementById('lastName').value = '';
            hideModal(addRecordatorioModal);
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });

    // Función para actualizar la lista de recordatorios en la ventana modal
    function updateRecordatorioList() {
        recordatorioList.innerHTML = '';
        recordatorios.forEach(function(recordatorio, index) {
            const listItem = document.createElement('li');
            listItem.textContent = `${recordatorio.name} ${recordatorio.lastName}`;
            listItem.addEventListener('click', function() {
                removeRecordatorio(index);
            });
            recordatorioList.appendChild(listItem);
        });
    }

    // Función para eliminar un recordatorio
    function removeRecordatorio(index) {
        recordatorios.splice(index, 1);
        
        updateRecordatorioList();
    }

    // Cerrar la ventana modal si se hace clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            hideModal(event.target);
        }
    });

    
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

//Sticky Header

const header = document.querySelector('[data-header]');

window.addEventListener('scroll', function(){
    if(window.scrollY >= 10) { header.classList.add('active'); 
    } else { header.classList.remove('active'); }
})

// Go-top button vanishing

const goTopBtn = document.querySelector('[data-go-top]');
window.addEventListener('scroll', function() {
    if(window.scrollY >= 800) { goTopBtn.classList.add('active'); }
    else { goTopBtn.classList.remove('active'); }
})
