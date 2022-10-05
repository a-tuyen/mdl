import { useState } from 'react';
import '../styles/Burger.scss';

const Burger = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='Burger' open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </div>
    )
}

export default Burger;