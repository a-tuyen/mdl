

import '../styles/Home.scss';


const Home = () => {
  return (
    <div className='Home'>
      <div className='paragraph'>
        <div className='web-size'>
        <img src='https://user-images.githubusercontent.com/77664153/180872927-70cd5e4c-b534-49ad-83ce-3ac92fdd11fc.png' alt='rolls of sheet lead on a shelf'></img>
        </div>
        <div className='mobile-size'>
        <img src='https://user-images.githubusercontent.com/77664153/206293919-06da80d3-df4d-4e3a-b40c-3b8c039a04d8.png'></img>
        </div>
        <p>​​Metal Distributors is a leading non-ferrous metal manufacturer and precision machining company serving a variety of different industries including the marine, nuclear, plumbing, construction and medical industries.</p>
        <p>We specialize in lead and lead-based products such as Sheet Lead and Lead Bricks for radiation shielding, Lead Anodes for electroplating and Lead Sash Weights for counter balances. We also offer our Reliance brand of sacrificial anodes​ and custom die casting and CNC services. View our full lineup of products <a href='/products'>here.</a></p>
        <p>Our technicians are knowledgeable in all aspects of metalwork, from design and pouring to metal finishing and coating. We can help you find a solution to your metal needs.</p>
      </div>
      <h1>Our Brands and Products</h1>
      <div className='products'>
        <div className='section'>
          <a href='/products/lead'>
            <img src="https://user-images.githubusercontent.com/77664153/193941443-ee28bda5-bd00-496a-a331-c73e90cf396d.png" alt='diagonal side view of rolls of sheet lead on a shelf' />
          </a>
        </div>
        <div className='section'>
          <a href='/products/sacrificialanodes'>
            <img src="https://user-images.githubusercontent.com/77664153/193941446-f16f8e7f-5ebe-42b9-a571-340d258ed0c6.png" alt='closeup of various sizes of rudder anodes' />
          </a>
        </div>
        <div className='section'>


          <a href='/products/cnc'><img src="https://user-images.githubusercontent.com/77664153/193941450-560744fb-848d-4fc4-8d6d-a0fa6d9b1755.png" alt='CNC machine working on a piece of lead giving off spartks' /></a>
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
