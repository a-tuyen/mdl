import React, { useState } from "react";
import '../styles/Navigation.scss';

const Navigation = () => {


    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }


    return (
        <div>

            <nav>
                <div className="leftSide">
                </div>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>
                <ul className="menuLinks" >
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Products</li>
                    <li>Contact Us</li>
                </ul>
                {/* <h1>Home</h1> */}
            </div>
        </div>


    )

}

export default Navigation;