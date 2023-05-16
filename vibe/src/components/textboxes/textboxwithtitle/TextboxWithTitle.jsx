import SpeechToText from "@/util/SpeechToText";
import styles from "./TextboxWithTitle.module.scss";
import Image from "next/image";

import mircophone from "../../../assets/icons/microphone.png";

const TextboxWithTitle = ( {title, width} ) => {

    new SpeechToText("mic", title);

    const group = {
        position: "relative",
        padding: "15px 0 0",
        width: `${width}px`
    }


    return (
        <div className={styles.container}>
            <div className={group}>
                <input type="input" className={styles.field} placeholder={title} name={title} id={title} required />
                <label htmlFor="name" className={styles.label}>{title}</label>
            </div>
            <div className={styles.miccontainer}>
                <Image id="mic" className={styles.microphone}
                    src={mircophone}
                    width={30}
                    height={30}
                />
            </div>
        </div>
    );
}

export default TextboxWithTitle;