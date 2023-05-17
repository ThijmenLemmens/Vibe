import Setting from "./Setting";

export default class SpeechToText {

    textOutput;

    #recognition;
    #startElement;

    #textveld

    constructor(id, textveld) {

        if (this.#checkAvailability()) {
            this.#startElement = document.getElementById(id);
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

            this.#recognition = new SpeechRecognition();
            
            this.#recognition.interimResults = true;

            this.#recognition.lang = Setting.language;

            this.#textveld = document.getElementById(textveld);

            this.#addEvent();
        } 
    }

    #addEvent() {

        this.#recognition.onresult = (event) => {
            let current = event.resultIndex;
            
            let transcript = event.results[current][0].transcript;

            this.textOutput += transcript;

            this.#textveld.value = transcript;
        }

        this.#startElement.addEventListener("click", (e) => {
            e.preventDefault();
            this.textOutput = "";
            this.#recognition.start();
        });

    }

    #checkAvailability() {
        if (typeof window !== "undefined" && ("SpeechRecongition" in window || "webkitSpeechRecognition" in window)) {
            return true;
        }

        return false;
    }

}