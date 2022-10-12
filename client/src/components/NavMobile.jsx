import { useState } from 'react';
import Burger from './Burger';
// import '../styles/Nav.scss';
import NavLinks from './NavLinks';

const NavMobile = () => {

const [open, setOpen] = useState(false)

    return (
        <div className='NavMobile'>
            <NavLinks />
            <Burger onClick={() => console.log('this has been clicked!')}/>
        </div>
    )
};

export default NavMobile;