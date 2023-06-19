'use client';

import Image from "next/image";

const SpeechToText = ( {icon, width, height, textField} ) => {

    const speechToText = () => {
        if (checkAvailability()) {    
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
            const recognition = new SpeechRecognition();
    
            recognition.interimResults = true;
    
            recognition.lang = "nl-NL"; 
    
            let textOutput = "";
    
            console.log("start");

            recognition.start();
    
            recognition.onresult = (event) => {
    
                let current = event.resultIndex;
                
                let transcript = event.results[current][0].transcript;
    
                textOutput += transcript;

                console.log(transcript);
    
                textField.current.value = transcript;
            }
        }
    }

    const checkAvailability = () => {
        if (typeof window !== "undefined" && ("SpeechRecongition" in window || "webkitSpeechRecognition" in window)) {
            return true;
        }
    
        return false;
    }

    return (
        <Image onClick={speechToText} src={icon} width={width} height={height}></Image>
    )
}

export default SpeechToText;