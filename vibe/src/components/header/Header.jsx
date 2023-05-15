import styles from "./Header.module.scss"
import Logo from "./logo/Logo";

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <nav>
                
            </nav>
        </header>
    )
};

export default Header;