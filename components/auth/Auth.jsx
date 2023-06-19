'use client';

import { Dialog, DialogTitle, DialogContent, DialogActions, Checkbox, Snackbar, Alert} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import GoogleButton from "../buttons/google/GoogleButton";

import styles from "./Auth.module.scss"

import personIcon from "../../public/assets/icons/user.png"
import padlock from "../../public/assets/icons/padlock.png"
import signIn from "../../firebase/signIn";
import AuthTextBox from "../textbox/authtextbox/AuthTextBox";
import Registeren from "./registeren/Registeren";

const Auth = ({ open, setOpen }) => {
    
    const modalRef = useRef();

    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");

    const [openRegisteren, setOpenRegisteren] = useState(false);

    const checkClickedOutsideModal = () => {
        window.onclick = (event) => {
            if (event.target.contains(modalRef.current) && event.target !== modalRef.current) {
                setOpen(false);
                setOpenRegisteren(false);
            } 
        }
    }

    const handleForm = async (event) => {
        event.preventDefault();

        const { result, error } = await signIn(email, password);     

        if (error) {
            return console.log(error)
        }

        console.log(result)
    }

    const hanldeClickRegisteren = () => {
        setOpenRegisteren(true);
        setOpen(false);
    }

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        checkClickedOutsideModal();
    }, [])

    return (
        <>
            <Dialog open={open} onClose={handleClose} sx={{
                "& .MuiPaper-root": {
                    maxWidth: "370px",
                    maxHeight: "390px",
                    borderRadius: "10px",
                },
                "& .MuiDialogContent-root": {
                    padding: "0px"
                }
            }}>
                <DialogContent className={styles.dialog} ref={modalRef}>
                    <div className={styles.loginContainer}>
                        <div className={styles.titleContainer}>
                            <h4 className={styles.title}>Member Login</h4>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.description}>
                                <p className={styles.text}>Vibe - a better way to connect!</p>
                            </div>
                            <form className={styles.form}>

                                <AuthTextBox imageRef={personIcon} output={setEmail} type={"email"} placeholder={"Your Email"} />

                                <AuthTextBox imageRef={padlock} output={setPassword} type={"password"} placeholder={"Password"} />

                                <div className={styles.util}>
                                    <Checkbox className={styles.checkbox}></Checkbox>
                                    <p className={styles.text}>Remember me</p>
                                    <a className={styles.a} href="">Forgot password?</a>
                                </div>

                                <GoogleButton />

                                <button onClick={handleForm} className={styles.loginButton}>Login</button>
                            </form>
                        </div>
                        <div className={styles.footer}>
                            <p>Don't have an account? <a onClick={hanldeClickRegisteren} className={styles.a}>Register</a></p>
                        </div>
                    </div>
                </DialogContent>
                {/* <Snackbar
                    open={errorLogin ? true : false}
                    autoHideDuration={6000}
                > 
                    <Alert severity="error"> {errorLogin} </Alert>
                </Snackbar> */}
            </Dialog>
            <Registeren openModal={openRegisteren} setOpenModal={setOpenRegisteren} setOpenLogin={setOpen}></Registeren>
        </>
    );
};

export default Auth;