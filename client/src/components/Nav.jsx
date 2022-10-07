import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.scss';
import Burger from '../components/Burger'


const Nav = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("buttonMenu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("buttonMenu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <>
            <div className='Nav'>
                <div className='left-side'>
                    <a href='/'><img src='https://user-images.githubusercontent.com/77664153/179275176-1d25fcfe-6d5e-478d-a1b2-2b461e6da938.png' alt='Metal Distributors Logo'></img></a>
                    <a href='/'><h1 className='title'>METAL DISTRIBUTORS LTD</h1></a>
                </div>

                <div className={menu_class}>
                    <Link to='/home'><p className='button1'>Home</p></Link>
                    <Link to='/about'><p className='button1'>About Us</p></Link>
                    <div className='product-menu'>
                        <Link to='/products'><p className='button1'>Products</p></Link>
                        <div className="dropdown-content">
                            <Link to='/products/lead'><p className='drop-item'>Lead</p></Link>
                            <Link to='/products/sacrificialanodes'><p className='drop-item'>Sacrificial Anodes</p></Link>
                            <Link to='/products/cnc'><p className='drop-item'>CNC Machining</p></Link>
                        </div>
                    </div>
                    <Link to='/contact'><p className='button1'>Contact Us</p></Link>
                </div>
                <div className='burger-menu' onClick={updateMenu}>
                    <nav>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                    </nav>
                </div>
            </div>

            {/* <hr></hr> */}

        </>
    );

};

export default Nav;