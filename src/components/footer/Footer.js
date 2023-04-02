import React from 'react';
import { HiMail, HiPhone } from "react-icons/hi";
import { FaGithubSquare, FaLinkedin, FaFacebookSquare, FaTwitterSquare, FaMapMarkerAlt } from "react-icons/fa";
import Logo from '../../assets/logo1.png';
import './Footer.scss';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="footer-container">
              <div>
                <div className="f-col">
                    <FaMapMarkerAlt className="icon-gap" />  
                <address >
                   <h4>University of Ibadan</h4>
                    <h3>Ibadan, Nigeria</h3>
                </address>
                </div>
                <div className="f-col">
                    <HiPhone className="icon-gap" />  
                
                <address>
                   <p>+2348162958127, +2349162270129 </p>
                </address>
                </div>
                <div className="f-col">
                    <HiMail className="icon-gap" />  
                <address >
                   <p>
                        <a style={{color: '#fff'}} href= "mailto: nwastenetwork@gmail.com" target="_blank" rel="noreferrer">nwastenetwork@gmail.com</a>
                   </p>
                </address>
                </div>
            </div>

            <div className="footer-about">
                <div className="about-nwaste">
                    <h3 style={{textAlign: "center"}}>About Our solution</h3>
                    <p>Nwaste the game changer is helping the farmers getting the most from their harvest and making farmers happy.</p>
                </div>

                <div className="media-handles">
                    <a href="https://www.linkedin.com/in/williamnnamani" target="_blank" rel="noreferrer">
                    <div className="platform linkdn"><FaLinkedin />
                    </div>
                    </a>

                    <a href="https://github.com/nnam-droid12" target="_blank" rel="noreferrer">
                    <div className="platform github"><FaGithubSquare />
                    </div>
                    </a>

                   <a href="https://web.facebook.com/rashidi.yakini.756/" target="_blank" rel="noreferrer">
                   <div className="platform fb"><FaFacebookSquare />
                    </div>
                   </a>

                    <a href="https://twitter.com/nnamani_william" target='_blank' rel="noreferrer" >
                    <div className="platform twitter"><FaTwitterSquare/>
                    </div>
                    </a>
                </div>
            </div>
        </div>
        <p className="copyright">&copy; 2022 NWASTE</p>
        </footer>
     );
}
 
export default Footer;