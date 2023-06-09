import {Feed} from "@/components/feed/feed";
import {MenuLeft} from "@/components/menu\'s/menuLeft";
import {MenuRight} from "@/components/menu\'s/menuRight";
import Header from "@/components/header/Header";

const Home = () => {

    return (
        <main className="bg-gray-200">
            <Header />
            <div className="mainContainer mt-4 relative">
                <MenuLeft/>
                <Feed/>
                <MenuRight/>
            </div>
        </main>
    );
}
export default Home;
