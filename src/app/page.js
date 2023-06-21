import styles from "./styles/Home.module.scss"

import Header from "../../components/header/Header";
import Feed from "../../components/feed/feed";
import MenuLeft from "../../components/menu's/menuLeft";
import MenuRight from "../../components/menu's/menuRight";

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
