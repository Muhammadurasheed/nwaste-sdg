import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './About.scss';

const AboutPage = (props) => {
    return(
      <div>
     <Header currentUser={props.currentUser} />
    <section className="about-us">
        <div className='about-container'>
          <div className="bg-text">
              <h1 >Explore More About NWASTE</h1>
          </div>
        </div>
        <div className='about-content'>
          <div>
          <h2 className="about-tittle">ABOUT NWASTE AND WHAT WE DO</h2>
          <p className='what-we-do'>
            NWASTE which stands for No-waste is a Agritech business that is solving the problem in commercial agriculture by connecting farmers to buyers seamlessly through our market place. Farmers once signup can upload their farm produce available for sales for potential buyers to reach out.Customers can keep track of the distance and duration of product delivery before arrival. <br/>
            There is also an opportunity to own a farm with Nwaste or give out your farm to be managed by Nwaste with less risk.

            We also have the loan section where farmers can have access to global agricultural loans, a profile section unique to a farmer where they can keep track of sales of farm produce. Also is flood dectector algorithm in the profile section of each farmer where they can upload a clear image of the farmland to detect if that land would be flooded or not before planting. 
          </p>
          </div>
        </div>
        <Footer />
    </section>
    </div>
    );
}

export default AboutPage;