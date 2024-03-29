import Head from "next/head";

import styles from "../styles/auth.module.scss"
import Logo from "@/components/logo/Logo";
import TextboxWithTitle from "@/components/textboxes/textboxwithtitle/TextboxWithTitle";

const Auth = () => {

    return (
        <>
            <Head>
                <title>Login, Signup</title>
            </Head>

            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.logocontainer}> <Logo fontSize={60} fontSizeSmall={46} /> </div>
                    <div className={styles.inputcontainer}>
                        <TextboxWithTitle input={"text"} title={"Display Name"} length={250} />
                    </div>
                    <div className={styles.inputcontainer}>
                        <TextboxWithTitle input={"text"} title={"Password"} length={250} />
                    </div>
                    <div className={styles.inputcontainer}>
                        <TextboxWithTitle input={"Text"} title={"Email"} length={250} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Auth;