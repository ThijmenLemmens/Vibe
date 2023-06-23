import { Dialog, DialogContent } from "@mui/material";
import styles from "../Auth.module.scss";
import { useState } from "react";
import AuthTextBox from "../../textboxes/authtextbox/AuthTextBox";

import padlock from "../../../assets/icons/padlock.png";
import personIcon from "../../../assets/icons/user.png";
import idCard from "../../../assets/icons/id-card.png";

const Registeren = ({openModal, setOpenModal, setOpenLogin}) => {

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleForm = () => {

        if (password === confirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {

                user.updateProfile({
                    displayName: displayName
                }).then(function() {

                }, function(error) {

                });
            }, function(error) {
                let errorCode = error.code;
                let errorMessage = error.message;
                if (errorCode === 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    console.error(error);
                }
            });
        }
    }

    const hanldeClickLogin = () => {
        setOpenModal(false);
        setOpenLogin(true);
    }

    const handleClose = () => {
        setOpenModal(false)
    }

    return (
        <Dialog open={openModal} onClose={handleClose} sx={{
            "& .MuiPaper-root": {
                maxWidth: "370px",
                maxHeight: "390px",
                borderRadius: "10px",
            },
            "& .MuiDialogContent-root": {
                padding: "0px"
            }
        }}>
            <DialogContent className={styles.dialog}>
                <div className={styles.loginContainer}>
                    <div className={styles.titleContainer}>
                        <h4 className={styles.title}>Member Registeren</h4>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.description}>
                            <p className={styles.text}>Vibe - a better way to connect!</p>
                        </div>
                        <form className={styles.form}>

                            <AuthTextBox imageRef={idCard} output={setDisplayName} type={"text"} placeholder={"Display Name"} />

                            <AuthTextBox imageRef={personIcon} output={setEmail} type={"email"} placeholder={"Email"} />

                            <AuthTextBox imageRef={padlock} output={setPassword} type={"password"} placeholder={"Password"} />

                            <AuthTextBox imageRef={padlock} output={setConfirmPassword} type={"password"} placeholder={"Confirm Password"} />

                            <button onClick={handleForm} className={styles.loginButton}>Registeren</button>

                        </form>
                    </div>
                    <div className={styles.footer}>
                        <p>You Have a account Login Here, <a className={styles.a} onClick={hanldeClickLogin}>Login</a></p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Registeren;