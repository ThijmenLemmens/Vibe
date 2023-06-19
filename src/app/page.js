import styles from "./styles/Home.module.scss"

import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";
import Menu from "../../components/menu/Menu";

export default function Home()  {
    return (
        <>
            <Header></Header>
            <main className="bg-gray-200">
                <div className="mainContainer mt-4 relative">
                    <MenuLeft/>
                    <Feed/>
                    <MenuRight/>
                </div>
            </main>
        </>
    )
}
