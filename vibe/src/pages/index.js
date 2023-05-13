import { Navbar } from "@/components/navbar/navbar";

import TextToSpeech from "@/util/TextToSpeech"; 
import SpeechToText from "@/util/SpeechToText";

const Home = () => {

    const tts = new TextToSpeech("Dit is een testcase!");

    tts.addEvent("button");

    const stt = new SpeechToText("test-button");

    return (
        <main>
            <Navbar />
            <h1>Home</h1>
            <button id="button"> Test </button>
            <button id="test-button"> test speech to text </button>
        </main>
    )
}

export default Home;
