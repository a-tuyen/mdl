import '../styles/ProductsWithConvertedList.scss';

const StubsBends = () => {
    return (
        // <div className='stubs-bends'>
            <div className='main-section'>
            <h1>Stubs and Bends</h1>
            <h3>KNOWN FOR ITS RESILIENCY TO PINHOLE LEAKS AND DURABILITY, LEAD USE IN PLUMBING DATES BACK TO ANCIENT TIMES</h3>
            <p>Available with either ABS or MJ Metalloy.</p>
            <p>We carry the following sizes and are able to make custom sizes upon request:</p>
            <div className='list'>
                <ul className='left-list'>
                    <h4>LEAD STUBS</h4>
                    <li>We offer diameters of 4"/3" or 4"</li>
                    <li>Lengths range from 8" and up</li>
                </ul>
                <ul className='right-list'>
                    <h4>LEAD BENDS</h4>
                    <li>We offer diameters of 4"/3" or 4"</li>
                    <li>Lengths range from 8" x 8" to 8" x 18"</li>
                </ul>
            </div>
        </div>
    );
};

export default StubsBends;