class TextToSpeech {

    element;
    text;
    synth;

    constructor(text) {
        if (!"speechSynthesis" in window) {
            alert("Sorry, your browser doesn't support text to speech!");
            return;
        }

        this.text = text;
        this.synth = window.speechSynthesis();
    }

    addEvent(string) {
        this.element = document.getElementById(string);
        this.element.addEventListener("mouseenter", e => {
            
        })
    }

    play = () => {
        
    }

    stop = () => {

    }


}