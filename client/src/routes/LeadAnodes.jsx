import '../styles/ProductsWithColumns.scss';

const LeadAnodes = () => {
    return (
        <div className="main-section">
            <h1>Lead Anodes</h1>
            <h3>TYPICALLY USED IN ELECTROPLATING PROCESSES TO ALTER THE CHEMICAL AND PHYSICAL PROPERTIES OF METAL SURFACES</h3>
            <p>We offer a variety of cast or extruded anodes in a wide range of configurations, such as Grids and Baskets. Each of our anodes go through the same process to produce a fine grain structure essential to even plate-out and maximum throwing power of the plating solution.
            </p>
            <p> We stock the following metals to produce any alloy you require:</p>
            <div className='list-section'>
                <ul>
                    <li>Tin (Sn)</li>
                    <li>Lead (Pb)</li>
                    <li>Antimony (Sb)</li>
                </ul>
                <ul>
                    <li>Silver (Ag)</li>
                    <li>Bismuth (Bi)</li>
                    <li>Aluminum (Al)</li>
                </ul>
            </div>
            <img className= 'grid-anode' src='https://user-images.githubusercontent.com/77664153/205996675-00db4a40-0b65-4780-8eeb-0c5269c9dfbc.png' alt='three cylindrical basket grid anodes' />
        </div>
    );
};

export default LeadAnodes;