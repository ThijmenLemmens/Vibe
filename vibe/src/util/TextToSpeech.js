export default class TextToSpeech {
    element;
    speech;
    synth;

    constructor(text) {
        if (typeof window !== 'undefined' && 'SpeechSynthesisUtterance' in window) {
            this.synth = window.speechSynthesis;
            this.speech = new SpeechSynthesisUtterance(text);
  
            if (!('speechSynthesis' in window)) {
                alert("Sorry, your browser doesn't support text to speech!");
                return;
            }

            console.log("Test")
        }
    }
  
    addEvent(string) {
        if (typeof window !== 'undefined') {
            this.element = document.getElementById(string);
  
            this.element.addEventListener('mouseenter', (e) => {
                e.preventDefault();
                this.play();
            });
    
            this.element.addEventListener('mouseleave', (e) => {
                e.preventDefault();
                this.stop();
            });
        }
    }
  
    play = () => {
        if (typeof window !== 'undefined') {
            this.synth.speak(this.speech);
        }
    };
  
    stop = () => {
        if (typeof window !== 'undefined') {
            this.synth.cancel();
        }
    };
}