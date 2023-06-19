import Image from "next/image";
import styles from "./MenuButton.module.scss"

const MenuButton = ({text, onClick, icon}) => {

    return (
        <div onClick={onClick} className={styles.button}>
            <Image className={styles.image} src={icon} width={30} height={24} />
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default MenuButton;