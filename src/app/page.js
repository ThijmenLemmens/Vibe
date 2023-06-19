import styles from "./styles/Home.module.scss"

import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";
import Menu from "../../components/menu/Menu";

export default function Home()  {
    return (
        <>
            <Header></Header>
            <main className={styles.main}>
                <div className={styles.menucontainer}>
                    <div className={styles.test}>
                        <Menu className={styles.menu} />
                    </div>
                </div>
                <div className={styles.feed}>
                    <Feed />
                </div>
                <div className={styles.news}>

                </div>
            </main>
        </>
    )
}
