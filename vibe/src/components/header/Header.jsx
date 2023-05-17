import styles from "./Header.module.scss"
import Logo from "../logo/Logo";
import Searchbar from "./searchbar/Searchbar";

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Logo fontSize={40} fontSizeSmall={32} />
            </div>
            <nav className={styles.nav}>
                <div className={styles.searchbar}>
                    <Searchbar />
                </div>
                <div className={styles.account}>

                </div>
            </nav>
        </header>
    )
};

export default Header;