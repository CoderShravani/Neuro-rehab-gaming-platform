document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');

    // Sample responses from the doctor (you can expand this)
    const doctorResponses = [
        "How can I help you today?",
        "Could you describe your symptoms in more detail?",
        "How long have you been experiencing these symptoms?",
        "I understand your concern. Let me help you with that.",
        "Have you taken any medication for this condition?",
    ];

    function addMessage(content, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'sent' : 'received'}`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = content;
        
        const timestamp = document.createElement('div');
        timestamp.className = 'timestamp';
        timestamp.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.appendChild(messageContent);
        messageDiv.appendChild(timestamp);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getRandomDoctorResponse() {
        return doctorResponses[Math.floor(Math.random() * doctorResponses.length)];
    }

    function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            // Add user message
            addMessage(message, true);
            messageInput.value = '';

            // Simulate doctor's response after a short delay
            setTimeout(() => {
                addMessage(getRandomDoctorResponse(), false);
            }, 1000);
        }
    }

    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Add initial doctor message
    setTimeout(() => {
        addMessage("Hello! I'm Dr. Smith. How can I assist you today?", false);
    }, 500);
});
