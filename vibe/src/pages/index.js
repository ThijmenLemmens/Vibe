import { Navbar } from "@/components/navbar/navbar";

import TextToSpeech from "@/util/TextToSpeech"; 

const Home = () => {

    const tts = new TextToSpeech("Dit is een testcase!");

    tts.addEvent("button");

    return (
        <main>
            <Navbar />
            <h1>Home</h1>
            <button id="button"> Test </button>
        </main>
    )
}

export default Home;
