import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../carousel/carousel';
import Hunger from '../../assets/2.png';
import Youth from '../../assets/teamwork.jpg';
import pp1 from '../../assets/pp1.jpg';
import pp2 from '../../assets/pp2.jpg';
import pp3 from '../../assets/pp3.jpg';
import pp4 from '../../assets/pp4.jpg';
import { MdArrowRightAlt, MdShoppingCart } from "react-icons/md";
import nwaste from '../../assets/farm-hub-design.jpg';
import Header from '../header/Header';
import CustomButton from '../custombutton/CustomButton.component';
import Subscribe from '../newsletter/newletter';
import Footer from '../footer/Footer';
import './HomePage.scss';

const HomePage = (props) => {
    return(
        <div className='homepage'>
         <Header currentUser={props.currentUser} />
          <div className='container'>
              <div className='outer'>
                <div className='details'>
                    <h1>We analyzes market trends and provides recommendation on what crops to grow based on demand, connect the dot between farmers and buyers and provide efficient farm management.</h1>
                    <p>Our Mission is Zero Hunger in 2030</p>
                    <a href='#guideline-content'>
                    <button 
                    className='get-started'>
                    <span className='get-started-btn'>Overview</span>
                    <span 
                    className="get-started-icon"
                    size='30px'
                    ><MdArrowRightAlt /></span>
                    </button>
                    </a>
                </div>
              </div>
          </div>
        
          
          {/* The beginning of service*/}
          <section className="service">
          <h1 className='horizontal-line service-title'><hr/>
              Our Services
          <hr/></h1>
            <div className="service-container">  
                <Link to='/signin'>
                    <div className="container-item">
                    <img src={pp4} className='img-style' alt='apple'/>
                    </div>
                </Link>
                <Link to=''>
                    <div className="container-item">
                    <img src={pp1} className='img-style' alt='orange'/>
                    </div>
                </Link>
                <Link to='/loan'>
                    <div className="container-item">
                    <img src={pp2} className='img-style' alt='mango'/>
                    </div>
                </Link>
                <Link to="/farmers">
                    <div className="container-item">
                    <img src={pp3} className='img-style' alt='cashew' />
                    </div>
                </Link>
        </div>
    </section>
    {/* end of the service */}
            
    {/* the beginning of user reviews */}
    <section className="review">
            <img 
            className='nwaste-app'
            src={nwaste} alt='logo' style={{height: '350px', width:'600px'}} />
            <div className='app-name'>
            <h1>We Are Redifining The Landscape of Commercial Agriculture</h1>
            <p className='card-text'>We help farmers get the most from harvest, connect the dot between farmers and buyers, quick access to soft loans and efficient storage system.</p>
                <Link to="/signin"> 
                      <CustomButton
                        className='custom-btn custom-btn2'> Learn More 
                    </CustomButton>
                </Link>
            </div>
    </section>
        {/* the end of user reviews */}

        <section>
          <h1 className="horizontal-line guideline-tittle"><hr/>
              Our Products
              <hr/></h1>
           <Slider />
    </section>

        {/* future plan beginning */}
      <section className='future-plan'>
            <h3 className='horizontal-line future-center' ><hr/>Our Future Plan<hr/></h3>
        <div className='mission'>
            <p>We are committed to pulling youths out of poverty with our strategy of owing a farmland without a penny and also creating jobs through our other Services.</p>
            <img src={Youth} alt='' style={{height: '280px', width:'280px'}}></img>
        </div>
        <div className='mission'>
          <p>
              Zero Hunger is our mission statement and we strongly believe with our consistent effort to reduce price of food inflation through our platform food scarcity will be a thing of the past. 
            </p>
              <img src={Hunger} alt='' style={{height: '280px', width:'280px'}} />
        </div>
      </section>
      {/* future plan ending */}
      <section>
        <Subscribe />
      </section>
      <Footer />
    </div>
    );
}

export default HomePage;