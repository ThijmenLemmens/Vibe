import styles from "./LoginButton.module.scss"

const LoginButton = ( {clicked} ) => {
    
    const handleClick = () => {
        clicked();
    }

    return (
        <button className={styles.button} onClick={handleClick}>Sign In</button>
    )
}

export default LoginButton;