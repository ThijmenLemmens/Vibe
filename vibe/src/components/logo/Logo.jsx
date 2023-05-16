import { Anton } from "next/font/google"

import TextToSpeech from "@/util/TextToSpeech";

const anton = Anton({
    subsets: ["latin"],
    weight: "400",
}); 

const Logo = ( {fontSize, fontSizeSmall} ) => {

    console.log(fontSize);

    const logo = {
        fontSize: `${fontSize}px`,
        letterSpacing: "-1px",
        color: "#7622b5"
    }

    const smalltext = {
        fontSize: `${fontSizeSmall}px`
    }

    return (
        <>
            <h4 className={`${anton.className}`} style={logo}>VIBE<span style={smalltext}>4ALL</span></h4>
        </>
    )
}

export default Logo;