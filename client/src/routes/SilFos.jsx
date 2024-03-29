// import '../styles/SilFos.scss';
import '../styles/ProductsWithList.scss';

const SilFos = () => {
    return (
        <div className='main'>
            <h1>Sil-Fos</h1>
            <h3>SILVER BRAZING ALLOYS USED TO BRAZE/JOIN COPPER AND COPPER BASED ALLOYS TOGETHER</h3>
            <p>Extensively used on copper and brass equipment such as refrigeration units, air conditioning coils and electrical conductors.</p>
            <p>We carry the following types of Sil-Fos:</p>

            <div className='list'>
                <ul>
                    <h4>Sil-Fos 5 (5% Ag) - Available in 1.5mm (5/64") and 2.5mm (7/64") Diameter</h4>
                    <li>Designed primarily for those applications where close fit-ups cannot be maintained.  It has the ability to fill gaps and form fillets without adversely affecting joint strength.</li>
                    <li>Recommended joint clearance:  0.003" to 0.005" (0.076mm to 0.127mm).</li>
                    <li>Slow Flow</li>
                </ul>
                <ul>
                    <h4>Sil-Fos 15 (15% Ag) - Available in 1.5mm (5/64") and 2.5mm (7/64") Diameter</h4>
                    <li>For use where close fit-ups cannot be maintained and joint ductility is important.</li>
                    <li>Recommended joint clearance: 0.002" to 0.005" (0.051mm to 0.127mm).</li>
                    <li>Slow Flow</li>
                </ul>
            </div>
            <img className='silfos' src='https://user-images.githubusercontent.com/77664153/205364391-320430ef-d5a7-431b-b08f-aa0890a6d95e.png' />
        </div>
    );
};

export default SilFos;