document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const chatLog = document.getElementById('chatLog');

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
