import '../styles/ProductsWithColumns.scss';

const Flashings = () => {
    return (
        <div className="main-section">
            <h1>Flashings and Caps</h1>
            <h3>USED IN ROOF CONSTRUCTION TO CREATE A DURABLE AND WEATHERTIGHT SEAL</h3>
            <p>We offer Pitched or Flat flashings.</p>
            <p>Our standard pitch is 7 ½" / 12" and our standard base is 12" x 12" x 3# sheet lead.</p>
            <p>We carry the following standard sizes for flashings and caps and are able to make custom sizes upon request.</p>
            <div className='list-section'>
                <ul>
                    <li>1"</li>
                    <li>1 ¼"</li>
                    <li>1 ½"</li>
                    <li>2"</li>
                    <li>3"</li>
                </ul>
                <ul>
                    <li>4"</li>
                    <li>5"</li>
                    <li>6"</li>
                    <li>8"</li>
                </ul>
            </div>
            <div>
                <img className='img-flashing' src='https://user-images.githubusercontent.com/77664153/206000783-e5b7c2f0-5d45-48f2-9983-371f63e93c36.png'></img>
                <img className='img-flashing' src='https://user-images.githubusercontent.com/77664153/205998008-208db160-bf2d-4be7-a547-93cd78a5cc85.png'></img>
            </div>
        </div>
    );
};

export default Flashings;