import ProfileImage from "../../../assets/icons/user.png";
import styles from "./ProfileHeader.module.scss"
import { signOut } from "firebase/auth";

import { auth } from "@/config/firebase";

const ProfileHeader = ({user}) => {

    const handleClick = () => {
        signOut(auth).then(() => {
        
        }).catch((error) => {
        
        });
    }

    return (
        <div className={styles.container}>
            {/* <ProfileImage image={user.photoURL ? user.photoURL : ""} width={38} height={38} /> */}
            <p className={styles.displayName}>{user.displayName}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
            </svg>

            <button onClick={handleClick} >Log uit</button>
        </div>
    )
}

export default ProfileHeader;