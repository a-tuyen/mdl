import '../styles/About.scss';


const About = () => {
  return (
    <div className="about">
            <div className='text'>
          <h1>About Us</h1>
          <p>Established in 1949, Metal Distributors has over 75 years of experience in the lead industry.  We pride ourselves on producing quality products and source our raw materials from only reputable sources.</p>
          <p>All our products are locally made in Burnaby, BC, by our team of skilled technicians. </p>
          <p>We are a proud member of the North American Die Casting Association.</p>
        </div>
        <img className='robot' src='/MDL-badge.jpg' alt='picture of the badge on a Metal Distributors Uniform' />
      </div>
    // </div>
  );
};

export default About;