import '../styles/Sidebar.scss';
import { Outlet } from 'react-router-dom';

const SideBar = () => {
    return (
        <nav>
            <div className="side-bar">
                <a href='/products/leadanodes'>Anodes</a>
                <a href='/products/babbitt'>Babbitt</a>
                <a href='/products/bricks'>Bricks & Blocks</a>
                <a href='/products/flashings'>Roof Flashings & Caps</a>
                <a href='/products/stubsbends'>Stubs and Bends</a>
                <a href='/products/pipetube'>Pipe & Tube</a>
                <a href='/products/sheetlead'>Sheet Lead</a>
                <a href='/products/sashweights'>Sash Weights</a>
                <a href='/products/silfos'>Sil-Fos</a>
                <a href='/products/sacrificialanodes'>Sacrificial Anodes</a>
                <a href='/products/cnc'>CNC Machining</a>
                {/* <Outlet /> */}
            </div>
        </nav>
    );
};

export default SideBar;