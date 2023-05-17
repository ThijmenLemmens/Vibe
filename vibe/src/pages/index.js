import { Navbar } from "@/components/navbar/navbar";

import TextToSpeech from "@/util/TextToSpeech"; 
import SpeechToText from "@/util/SpeechToText";
import {Feed} from "@/components/feed/feed";
import {MenuLeft} from "@/components/menu/menuLeft";
import {MenuRight} from "@/components/menu/menuRight";

const Home = () => {

    // const tts = new TextToSpeech("Dit is een testcase!");
    //
    // tts.addEvent("button");
    //
    // const stt = new SpeechToText("test-button");

    return (
        <main>
            <Navbar />
            <div className="flex mainContainer">
                <MenuLeft />
                <Feed />
                <MenuRight />
            </div>
        </main>
    )
}

export default Home;
