import {Feed} from "@/components/feed/feed";
import {MenuLeft} from "@/components/menu\'s/menuLeft";
import {MenuRight} from "@/components/menu\'s/menuRight";
import Header from "@/components/header/Header";

const Home = () => {

    return (
        <main>
            <Header />
            <div className="flex mainContainer mt-4">
                <MenuLeft/>
                <Feed/>
                <MenuRight/>
            </div>
        </main>
    );
}
export default Home;
