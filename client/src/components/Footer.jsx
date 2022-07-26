import '../styles/Footer.scss';

const Footer = () => {
    return (
        <div className="Footer">
            <hr></hr>
            <div className='Hours'>
                <h3>HOURS OF OPERATION</h3>
                <p>MONDAY............8:00am - 3:30pm</p>
                <p>TUESDAY............8:00am - 3:30pm</p>
                <p>WEDNESDAY.....8:00am - 3:30pm</p>
                <p>THURSDAY.........8:00am - 3:30pm</p>
                <p>FRIDAY...............8:00am - 3:30pm</p>
            </div>
            <div className='Contact'>
            <p>PHONE: 604-420-3137 / 1-877-420-3731 (TOLL FREE)</p>
            <p>EMAIL: info@metaldist.com</p>
            <p>FAX: 604-420-9240</p>
            </div>
            <div className='Address'>
            <p>Metal Distributors LTD</p>
            <p>7220 Winston St</p>
            <p>Burnaby, BC  V5A 2G9</p>
            </div>


        </div>
    );
};


export default Footer;