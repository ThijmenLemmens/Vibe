import Image from "next/image";
import styles from "./Searchbar.module.scss";

import magnifier from "../../../assets/icons/magnifier.png"
import mic from "../../../assets/icons/microphone.png"
import SpeechToText from "@/util/SpeechToText";

const Searchbar = () => {

    const handleOnCick = () => {
        console.log("click");
        SpeechToText("search");
    }

    return (
        <div className={styles.searchbar}>
            <div className={styles.iconcontainer}>
                <Image 
                    className={styles.icon}
                    src={magnifier}
                    width={24}
                    height={24}
                    alt=""
                />
            </div>
            <input id="search" className={styles.search} type="text" name="" placeholder="Search in Vibe" />
            <div id="mic" className={styles.iconcontainer}>
                <Image 
                    className={styles.icon}
                    src={mic}
                    width={24}
                    height={24}
                    onClick={handleOnCick}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Searchbar;