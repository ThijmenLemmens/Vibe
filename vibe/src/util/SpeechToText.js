import Setting from "./Setting";

const SpeechToText = (id) => {
    if (checkAvailability()) {
        const textveld = document.getElementById(id);

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        const recognition = new SpeechRecognition();

        recognition.interimResults = true;

        recognition.lang = Setting.language;

        let textOutput = "";

        recognition.start();

        recognition.onresult = (event) => {

            let current = event.resultIndex;
            
            let transcript = event.results[current][0].transcript;

            textOutput += transcript;

            textveld.value = transcript;

        }
    }
}

const checkAvailability = () => {
    if (typeof window !== "undefined" && ("SpeechRecongition" in window || "webkitSpeechRecognition" in window)) {
        return true;
    }

    return false;
}

export default SpeechToText;
