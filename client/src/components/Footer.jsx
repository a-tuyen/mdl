import '../styles/Footer.scss';

const Footer = () => {
    return (
        <div className="Footer">
            <hr></hr>
            <div className='Main'>
                <div className='Hours'>
                    <h3>HOURS OF OPERATION</h3>
                    {/* <p>MONDAY.............8:00am - 3:30pm</p>
                    <p>TUESDAY............8:00am - 3:30pm</p>
                    <p>WEDNESDAY.....8:00am - 3:30pm</p>
                    <p>THURSDAY.........8:00am - 3:30pm</p>
                    <p>FRIDAY...............8:00am - 3:30pm</p>
                    <p>WEEKENDS...................CLOSED</p> */}

                    <p>MONDAY - FRIDAY.........8:00am - 3:30pm</p>
                    <p>WEEKENDS................................CLOSED</p>

                </div>
                <div className='Contact'>
                    <h3>CONTACT US</h3>
                    <p>EMAIL: info@metaldist.com</p>
                    <p>PHONE: 604 - 420 - 3137</p>
                    <p>TOLL FREE: 1 - 877 - 420 - 3731</p>
                    <p>FAX: 604 - 420 - 9240</p>
                </div>
                <div className='Address'>
                    <h3>LOCATION</h3>
                    <p>Metal Distributors LTD</p>
                    <p>7220 Winston St</p>
                    <p>Burnaby, BC  V5A 2G9</p>
                    <p>CANADA</p>
                </div>
            </div>


        </div>
    );
};


export default Footer;