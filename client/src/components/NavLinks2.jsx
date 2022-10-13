
import { Link } from 'react-router-dom'
// import '../styles/Nav.scss';

const NavLinks = () => {

    return (

        <div className='buttonMenu'>
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
    )

}

export default NavLinks;