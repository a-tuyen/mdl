import '../styles/Footer2.scss'

const Footer = () => {
    return (
        <div className='footer2'>
            {/* <hr></hr> */}

            <section className='side-section'>
                <h2>WE ARE HERE TO HELP</h2>
                <div className='info'>
                    <img src="https://user-images.githubusercontent.com/77664153/189227458-6398c5cc-22ab-47ea-8149-cba5ba7d6f23.png" />
                    <p>1 (877) 420 3731</p>
                </div>
                <div className='info'>
                    <img src="https://user-images.githubusercontent.com/77664153/189203263-d8200e4d-2aa4-4b03-b138-bc12c7e758f9.png" />
                    <p>info@metaldist.com</p>
                </div>
                <div className='info'>
                    <img src="https://user-images.githubusercontent.com/77664153/189238979-6ab01b09-c0bf-4d64-8539-b8104bd73035.png" />
                    <p>7220 Winston Street, Burnaby, BC V5A 2G9</p>
                </div>

            </section>

            <button><a href='/order'>Place an order</a></button>
            <p>Copyright © 2022 Metal Distributors LTD</p>
        </div>

    );
};

export default Footer;