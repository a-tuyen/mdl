import { Link, Outlet } from 'react-router-dom'
import '../styles/Nav.scss';


const Nav = () => {
    return (
        <>
            <div className='Nav'>
                <div className='logo'>
                    <img src='https://user-images.githubusercontent.com/77664153/179275176-1d25fcfe-6d5e-478d-a1b2-2b461e6da938.png'></img>
                    <h1 className='title'>METAL DISTRIBUTORS LTD</h1>
                </div>
                <div className='buttonMenu'>
                    <Link to ='/home'><p className='button1'>Home</p></Link>
                    <Link to ='/about'><p className='button1'>About Us</p></Link>
                    <div className='product-menu'>
                        <Link to ='/products'><p className='button1'>Products</p></Link>
                        <div className="dropdown-content">
                            <Link to ='/products/lead'><p className='drop-btn'>Lead</p></Link>
                            <Link to ='/products/sacrificialanodes'><p className='drop-btn'>Sacrificial Anodes</p></Link>
                            <Link to ='/products/cnc'><p className='drop-btn'>CNC Machining</p></Link>
                        </div>
                    </div> 
                    <Link to ='/contact'><p className='button1'>Contact Us</p></Link>
                </div>
            </div>
        
            <hr></hr>

            <Outlet />   
        </>
    );

};

export default Nav;