document.addEventListener('DOMContentLoaded', function() {
    const addPersonBtn = document.getElementById('addPersonBtn');
    const viewPeopleBtn = document.getElementById('viewPeopleBtn');
    const addPersonModal = document.getElementById('addPersonModal');
    const viewPeopleModal = document.getElementById('viewPeopleModal');
    const savePersonBtn = document.getElementById('savePersonBtn');
    const peopleList = document.getElementById('peopleList');
    const closeButtons = document.querySelectorAll('.close-button');

    let people = [];

    // Función para mostrar la ventana modal
    function showModal(modal) {
        modal.style.display = "block";
    }

    // Función para ocultar la ventana modal
    function hideModal(modal) {
        modal.style.display = "none";
    }

    // Evento para abrir la ventana modal de añadir persona
    addPersonBtn.addEventListener('click', function() {
        showModal(addPersonModal);
    });

    // Evento para abrir la ventana modal de ver personas
    viewPeopleBtn.addEventListener('click', function() {
        updatePeopleList();
        showModal(viewPeopleModal);
    });

    // Eventos para cerrar las ventanas modales
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            hideModal(button.closest('.modal'));
        });
    });

    // Evento para guardar la persona
    savePersonBtn.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const lastName = document.getElementById('lastName').value;

        if (name && lastName) {
            people.push({ name: name, lastName: lastName });
            document.getElementById('name').value = '';
            document.getElementById('lastName').value = '';
            hideModal(addPersonModal);
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });

    // Función para actualizar la lista de personas en la ventana modal
    function updatePeopleList() {
        peopleList.innerHTML = '';
        people.forEach(function(person, index) {
            const listItem = document.createElement('li');
            listItem.textContent = `${person.name} ${person.lastName}`;
            listItem.addEventListener('click', function() {
                removePerson(index);
            });
            peopleList.appendChild(listItem);
        });
    }

    // Función para eliminar una persona
    function removePerson(index) {
        people.splice(index, 1);
        updatePeopleList();
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
