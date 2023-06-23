import Image from "next/image";
import styles from "./GoogleButton.module.scss"
import { auth } from "@/config/firebase"
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

import google from "@/assets/icons/google.png"

const GoogleButton = () => {

    const provider = new GoogleAuthProvider();

    const handleOnClick = () => {
        console.log("Clicked");
        signInWithRedirect(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...

                console.log(user)

            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...

            console.log(errorMessage)

        });
    }

    return (
        <div onClick={handleOnClick} className={styles.button}>
            <Image src={google} width={24} height={24} alt="" />
            <p className={styles.text}>Sign in with Google</p>
        </div>
    );
}

export default GoogleButton;