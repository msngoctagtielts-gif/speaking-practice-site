/*
 * Simple Text-to-Speech helper using the Web Speech API.
 * Provides a function speakText that reads aloud the provided text
 * using the first available English voice. The rate is set to 0.8
 * to slow the speed down to approximately 80% of normal, and pitch
 * and volume are left at their defaults to keep the voice natural.
 */

function speakText(text, lang = 'en-US') {
    if (!('speechSynthesis' in window)) {
        console.warn('Web Speech API is not supported in this browser.');
        return;
    }
    const voices = window.speechSynthesis.getVoices();
    // Choose an English voice if available
    let selectedVoice = voices.find(v => v.lang === lang || v.lang.startsWith('en'));
    if (!selectedVoice) {
        selectedVoice = voices[0];
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;
    utterance.rate = 0.8; // 80% of normal speaking speed
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    window.speechSynthesis.speak(utterance);
}