import '../styles/Sidebar.scss';

const SideBar = () => {
    return (
        <nav className="side-bar">
            <div className='first-part'>
                <a href='/products/leadanodes'>Lead Anodes</a>
                <a href='/products/babbitt'>Babbitt</a>
                <a href='/products/bricks'>Bricks & Blocks</a>
            </div>
            <div className='second-part'>
                <a href='/products/flashings'>Flashings & Caps</a>
                <a href='/products/stubsbends'>Stubs and Bends</a>
                <a href='/products/pipetube'>Pipe & Tube</a>
            </div>
            <div className='third-part'>
                <a href='/products/sheetlead'>Sheet Lead</a>
                <a href='/products/sashweights'>Sash Weights</a>
                <a href='/products/silfos'>Sil-Fos</a>
                {/* <a href='/products/sacrificialanodes'>Sacrificial Anodes</a>
                <a href='/products/cnc'>CNC Machining</a> */}
            </div>
        </nav>
    );
};

export default SideBar;