document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const chatLog = document.getElementById('chatLog');

// Función para añadir un mensaje al registro de chat
    function addMessageToChatLog(message, isUserMessage) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;

        if (isUserMessage) {
            messageElement.classList.add('user-message');
        } else {
            messageElement.classList.add('agent-message'); // Añade una clase para los mensajes del agente
        }

        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight; // Hace scroll hacia abajo
    }

    // Añade el mensaje precargado al cargar la página
    addMessageToChatLog("Soy su asistente IA de Trámites, ¿qué necesita?", true); // El segundo argumento indica que no es un mensaje del usuario



    

    sendButton.addEventListener('click', function() {
        const message = userInput.value;
        if (message) {
            // Crea un elemento para mostrar el mensaje del usuario
            const userMessage = document.createElement('div');
            userMessage.classList.add('user-message');
            userMessage.textContent = message;

            // Añade el mensaje al registro de chat
            chatLog.appendChild(userMessage);

            // Limpia el campo de entrada
            userInput.value = '';

            // Hace scroll hacia abajo para mostrar el mensaje más reciente
            chatLog.scrollTop = chatLog.scrollHeight;
        }
    });

    // Permite enviar el mensaje al presionar Enter
    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});


//'use strict';

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
