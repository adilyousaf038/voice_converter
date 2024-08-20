let speech = new SpeechSynthesisUtterance();
let voices = [];

const speakButton = document.querySelector('#speak-btn');


const voicesDropdown = document.querySelector('#voice-select');
window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]

    voices.forEach((voice, i) => (voicesDropdown.options[i] = new Option(voice.name, i)));
};

speakButton.addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;   
    window.speechSynthesis.speak(speech);
});