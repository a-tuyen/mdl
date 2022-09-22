import { Outlet } from 'react-router-dom';
import '../styles/ProductsWithList.scss';

const Lead = () => {
    return (
        <div className="main">
            <h1>LEAD</h1>

            <h2>We offer a variety of lead and lead-based products and services</h2>
            <div className='list'>
                <ul>
                    <li>Anodes</li>
                    <li>Babbitt</li>
                    <li>Antimonial Lead</li>
                    <li>Bricks & Blocks</li>
                    <li>Bullet Metal</li>
                    <li>Came Lead</li>
                    <li>Castings</li>
                    <li>Counterbalance Weights</li>
                    <li>Custom Fabricated Items</li>
                    <li>Die Casting</li>
                    <li>Extrusions</li>
                </ul>
                <ul>
                    <li>Ingots: Bars and Pigs</li>
                    <li>Roof Flashings & Spun Caps</li>
                    <li>Lead Shot</li>
                    <li>Stubs and Bends</li>
                    <li>Low Temp Alloys</li>
                    <li>Pewter, Jewelry Alloys</li>
                    <li>Pipe & Tube</li>
                    <li>Sash Weights</li>
                    <li>Sheet Lead</li>
                    <li>Solder: Bar and Pig</li>
                </ul>
                <Outlet />
            </div>
        </div>
    );
};

export default Lead;