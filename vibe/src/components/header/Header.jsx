import { useState } from "react";
import Auth from "../auth/Auth";
import styles from "./Header.module.scss";
import LoginButton from "../buttons/login/LoginButton";
import useAuth from "../../firebase/checkAuth";
import ProfileHeader from "./profileheader/ProfileHeader";

const Header = () => {

    const [open, setOpen] = useState(false);

    const auth = useAuth();

    const handleClick = () => {
        setOpen(true);
    }

    return (
        <header className={styles.header}>
            <div className={styles.sides}>
                <h4 className={styles.text}>Vibe</h4>
            </div>
            <div className={styles.middle}>

            </div>
            <div className={styles.sides}>
                {!auth?.user ? <LoginButton clicked={handleClick} /> : <ProfileHeader user={auth.user}/> }
                {/* <button onClick={handleClick}>Login</button> */}
            </div>
            <Auth open={open} setOpen={setOpen}></Auth>
        </header>
    )
}

export default Header;