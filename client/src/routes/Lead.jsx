import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom';

const Lead = () => {
    return (
        <div className="Lead">
            <h1>LEAD</h1>
            <div>
                <SideBar />

                <h2>We offer a variety of lead and lead-based products and services</h2>
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