import '../styles/Sidebar.scss';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="side-bar">
            <Link to ='/'><p>Anodes</p></Link>
            <p>Babbitt</p>
            <p>Bricks & Blocks</p>
            <p>Roof Flashings & Caps</p>
            <p>Stubs and Bends</p>
            <p>Pipe & Tube</p>
            <p>Sheet Lead</p>
            <p>Sash Weights</p>
            <p>Sil-Fos</p>
            <p>Sacrificial Anodes</p>
            <p>CNC Machining</p>
        </div>
    );
};

export default SideBar;