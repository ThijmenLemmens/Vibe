'use client';

import MenuButton from "../buttons/menubutton/MenuButton";
import styles from "./Menu.module.scss"

import home from "../../public/assets/icons/home.png";

const Menu = () => {

    const handleClick = () => {
        console.log("test")
    }


    return (
        <div>
            <MenuButton onClick={handleClick} text={"StartPagina"} icon={home} />
        </div>
    )
}

export default Menu;
