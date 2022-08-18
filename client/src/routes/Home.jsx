

import '../styles/Home.scss';


const Home = () => {
  return (
    <div className='Home'>
      <div className='paragraph'>
        <img src='https://user-images.githubusercontent.com/77664153/180872927-70cd5e4c-b534-49ad-83ce-3ac92fdd11fc.png' alt='rolls of sheet lead on a shelf'></img>
        <p>​​Metal Distributors is a leading non-ferrous metal manufacturer and precision machining company serving a variety of different industries including the marine, nuclear, plumbing, construction and medical industries.</p>
        <p>We specialize in lead and lead-based products such as Sheet Lead and Lead Bricks for radiation shielding, Lead Anodes for electroplating and Lead Sash Weights for counter balances. We also offer our Reliance brand of sacrificial anodes​ and custom die casting and CNC services. View our full lineup of products here.</p>
        <p>Our technicians are knowledgeable in all aspects of metalwork, from design and pouring to metal finishing and coating. We can help you find a solution to your metal needs.</p>
      </div>
      <h1>Our Brands and Products</h1>
      <div className='products'>
        <div className='section'>
          <h2>LEAD</h2>
          <img src="https://user-images.githubusercontent.com/77664153/182916916-76b1cd90-51e3-4917-8ffe-894333f5dc14.png" alt='diagonal side view of rolls of sheet lead on a shelf'/>
        </div>
        <div className='section'>
          <h2>SACRIFICIAL ANODES</h2>
          <img src="https://user-images.githubusercontent.com/77664153/182916917-a5437d32-1c0f-4e27-8764-1f1d075e3e51.png" alt='closeup of various sizes of rudder anodes' />
        </div>
        <div className='section'>
          <h2>CNC MACHINING</h2>

          <img src="https://user-images.githubusercontent.com/77664153/182916915-f5d4938f-1a1d-49e7-a59e-273ee64283b9.png"  alt='CNC machine working on a piece of lead giving off spartks' />
        </div>
      </div>
      <div className='Brands'>
        <div className='titles'>



        </div>
        <div className='images'>


        </div>
        {/* <img src='https://user-images.githubusercontent.com/77664153/179861454-25ce6c5b-a44e-4783-bb3b-22bb4d8ac0ec.png'></img>
        <img src='https://user-images.githubusercontent.com/77664153/179861617-a0d0c58a-5449-4719-bcc4-e142e635c262.jpg'></img>
        <img src='https://cdn.pixabay.com/photo/2019/08/11/07/44/laser-4398314_960_720.jpg'></img> */}
      </div>
    </div>

  );
};

export default Home;
