import styles from "./AuthTextBox.module.scss"
import Image from "next/image";

import mic from "../../../assets/icons/microphone.png";
import SpeechToText from "../../buttons/speechtotext/SpeechToText";
import { useRef } from "react";

const AuthTextBox = ( {imageRef, output, type, placeholder} ) => {

    const textfield = useRef();

    return (
        <div className={styles.input}>
            <Image src={imageRef} width={24} height={24}  alt=""/>
            <input ref={textfield} onChange={(e) => output(e.target.value)} required className={styles.inputVeld} type={type} placeholder={placeholder} />
            <SpeechToText icon={mic} width={24} height={24} textField={textfield}></SpeechToText>
        </div>
    )
}

export default AuthTextBox;