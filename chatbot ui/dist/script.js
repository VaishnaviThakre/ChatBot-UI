document.addEventListener('DOMContentLoaded', (event) => {
  const sendButton = document.getElementById('sendButton');
  const messageInput = document.getElementById('messageInput');

  sendButton.addEventListener('click', sendMessage);
  messageInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
          sendMessage();
      }
  });

  function sendMessage() {
      const message = messageInput.value.trim();
      if (message === '') return;

      const messagesChat = document.querySelector('.messages-chat');

      // Add user message
      const userMessageElement = document.createElement('div');
      userMessageElement.classList.add('message', 'right-message');
      userMessageElement.innerHTML = `
          <div class="photo" style="background-image: url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);">
              <div class="online"></div>
          </div>
          <p class="text right">${message}</p>
      `;
      messagesChat.appendChild(userMessageElement);

      // Scroll to the bottom
      messagesChat.scrollTop = messagesChat.scrollHeight;

      // Add bot response after a short delay
      setTimeout(() => {
          const botResponseElement = document.createElement('div');
          botResponseElement.classList.add('message', 'left-message');
          botResponseElement.innerHTML = `
              <div class="response">
                  <p class="text left">Received your message: ${message}</p>
              </div>
          `;
          messagesChat.appendChild(botResponseElement);

          // Scroll to the bottom
          messagesChat.scrollTop = messagesChat.scrollHeight;
      }, 1000);

      // Clear the input
      messageInput.value = '';
  }
});
