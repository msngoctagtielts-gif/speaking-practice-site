/*
 * Simple chat simulation for practicing English conversation.
 * This script appends user messages to a chat window and returns a dummy response
 * that repeats what the user said. Replace the generateDummyResponse function
 * with an API call to your AI service (e.g., OpenAI) for a real conversation.
 */

function appendMessage(sender, text) {
    const chatWindow = document.getElementById('chat-window');
    const msg = document.createElement('div');
    msg.style.marginBottom = '8px';
    msg.innerHTML = '<strong>' + sender + ':</strong> ' + text;
    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const userMessage = input.value.trim();
    if (!userMessage) {
        return;
    }
    appendMessage('Bạn', userMessage);
    input.value = '';
    // Simulate a short delay before the AI responds
    setTimeout(() => {
        const response = generateDummyResponse(userMessage);
        appendMessage('AI', response);
        // Read the AI response aloud using the Web Speech API
        if (typeof speakText === 'function') {
            speakText(response, 'en-US');
        }
    }, 500);
}

function generateDummyResponse(message) {
    // Basic echo response as a placeholder.
    return 'Tôi nghe bạn nói: "' + message + '". Cảm ơn bạn đã luyện tập!';
}