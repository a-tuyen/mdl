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
                    {/* <Link to ='/'><p className='button1'>Home</p></Link> */}
                    <Link to ='/home'><p className='button1'>Home</p></Link>
                    <Link to ='/about'><p className='button1'>About Us</p></Link>
                    <Link to ='/products'><p className='button1'>Products</p></Link>
                    <Link to ='/contact'><p className='button1'>Contact Us</p></Link>
                </div>
            </div>
        
            <hr></hr>

            <Outlet />
    
    
        </>
    );

};

export default Nav;