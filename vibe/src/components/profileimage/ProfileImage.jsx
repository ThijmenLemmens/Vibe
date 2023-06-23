import Image from "next/image";

import styles from "./ProfileImage.module.scss"

const ProfileImage = ({ image, width, height }) => {
    return <Image className={styles.image} src={image} width={width} height={height}  alt=""/>;
};

export default ProfileImage;