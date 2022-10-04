import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.scss';


const Nav = () => {
    const [showFullMenu, setShowFullMenu] = useState(true)
    return (
        <>

            {/* <section class="top-nav">
                <div>
                    Logo Here
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                    <div class='menu-button'></div>
                </label>
                <ul class="menu">
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                    <li>Four</li>
                    <li>Five</li>
                </ul>
            </section> */}


            <div className='Nav'>
                <div className='left-side'>
                    <a href='/'><img src='https://user-images.githubusercontent.com/77664153/179275176-1d25fcfe-6d5e-478d-a1b2-2b461e6da938.png' alt='Metal Distributors Logo'></img></a>
                    <a href='/'><h1 className='title'>METAL DISTRIBUTORS LTD</h1></a>
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                    <div class='menu-button'></div>
                </label>
                <div className='buttonMenu'>
                    <Link to='/home'><p className='button1'>Home</p></Link>
                    <Link to='/about'><p className='button1'>About Us</p></Link>
                    <div className='product-menu'>
                        <Link to='/products'><p className='button1'>Products</p></Link>
                        <div className="dropdown-content">
                            <Link to='/products/lead'><p className='drop-btn'>Lead</p></Link>
                            <Link to='/products/sacrificialanodes'><p className='drop-btn'>Sacrificial Anodes</p></Link>
                            <Link to='/products/cnc'><p className='drop-btn'>CNC Machining</p></Link>
                        </div>
                    </div>
                    <Link to='/contact'><p className='button1'>Contact Us</p></Link>
                </div>
                <button className='burger-menu' onClick={() => setShowFullMenu(!showFullMenu)}><img src='https://user-images.githubusercontent.com/77664153/193863578-19407891-0c7f-4a86-be70-62e013e4b9c5.png'></img></button>
            </div>

            <hr></hr>

        </>
    );

};

export default Nav;