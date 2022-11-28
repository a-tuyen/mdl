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
                <img className= 'grid-anode' src='https://user-images.githubusercontent.com/77664153/204403704-9ba90130-e12a-4c0f-b35f-0eb6b4cb2aca.png' />
            </div>

        </div>
    );
};

export default LeadAnodes;