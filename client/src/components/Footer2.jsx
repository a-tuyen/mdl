import '../styles/Footer2.scss'

const Footer = () => {
    return (
        <div className='footer2'>
            <section className='side-section'>
                <ul>
                    <h2>WE ARE HERE TO HELP</h2>
                    <li> <img src="https://user-images.githubusercontent.com/77664153/189227458-6398c5cc-22ab-47ea-8149-cba5ba7d6f23.png" alt='rotary telephone icon' />
                        <p>1 (877) 420 3731</p>
                    </li>
                    <li>
                        <img src="https://user-images.githubusercontent.com/77664153/189203263-d8200e4d-2aa4-4b03-b138-bc12c7e758f9.png" alt='globe icon' />
                        <p>info@metaldist.com</p>
                    </li>
                    <li> <img src="https://user-images.githubusercontent.com/77664153/189387060-cabc9d81-b64d-466d-bf56-d5233f03e7fa.png" alt='map with pin drop' />
                        <p>7220 Winston Street, Burnaby, BC  V5A 2G9</p>
                    </li>
                    <li>
                        <p className='copyright'>Copyright © 2022 Metal Distributors LTD</p>
                    </li>
                </ul>

            </section>
            <div className='madeincanada'>
                <img src="/made-in-canada-logo-mdl.png" alt='maple leaf icon with waves of the mdl colours going through it' />
                <div className='logo-text'>
                    <span>PROUDLY</span>
                    <span>MADE IN</span>
                    <span>CANADA</span>
                </div>
            </div>

            <div className='submit'><button className='order'><a href='/order'>Place an order</a></button></div>
        </div>

    );
};

export default Footer;