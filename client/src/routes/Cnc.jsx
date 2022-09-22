import '../styles/Cnc.scss'

const Cnc = () => {
    // return (
    //     <div classname="cnc">
    //         <h1>CNC Machining</h1>
    //         <img src='https://user-images.githubusercontent.com/77664153/180502025-d02877f3-628c-4f40-9fee-662ed406c23c.png'/>
    //         <h3>To learn more about our CNC Machining Services, please visit <a href='http://www.maxumcnc.com'>maxumcnc.com</a></h3>
    //     </div>
    // );
    return (
        <div className="cnc">
            <h1>CNC Machining</h1>
            <img className='img-maxum-logo' src='https://user-images.githubusercontent.com/77664153/180502025-d02877f3-628c-4f40-9fee-662ed406c23c.png' alt='Maxum CNC Logo'></img>
            <p></p>
            <h3>To learn more about our CNC Machining Services, please visit <a href='http://www.maxumcnc.com' target="_blank" rel='noreferrer'>maxumcnc.com</a></h3>
        </div>
    );
};

export default Cnc;
