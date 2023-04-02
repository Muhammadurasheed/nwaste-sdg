import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../assets/logo1.png';
import Avatar from '../../assets/avatar.png';
import { GoThreeBars } from "react-icons/go";
import { auth } from '../../firebase/firebase.utils';
import { MdLogout } from "react-icons/md";
import { useState } from 'react';
import { IoMdContact } from "react-icons/io";
import './Header.scss';
import { motion } from 'framer-motion';


const Header = ({ currentUser }) =>{

const [isMenu, setIsMenu] = useState(false)

const logOut = () => {
    auth.signOut(window.location = '/');
    setIsMenu(false);
}

    return(
            <nav className='header sticky'>
            {/* my logo === h1 */}
            <Link to='/'>
             <div> 
                    <div className='logo-container' title='Go to home page!'>
                    <div className='col'>
                    <img className='logo' alt='logo' src={Logo} style={{height: '65px', width: '65px'}}/> 
                        <div className='text col'>
                            Nwaste
                        </div>
                </div>
                </div>    
            </div> 
            </Link>
             {/* the end of the logo */} 
            <input type="checkbox" className="nav-toggle" id='nav-toggle'/>
            <label htmlFor='nav-toggle' className='nav-toggle-label'>
                    <span style={{color: '#0F9D58'}}>
                        <GoThreeBars className='hamburger-btn' size='32px' />
                    </span>
            </label>
               <div className='options'>

                 <Link className='option hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' to='/about'>
                     ABOUT
                 </Link>
                 <Link className='option hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' to='/faq' >
                     FAQ
                 </Link>
                 <Link className='option hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' to='/loan' >
                    LOAN
                </Link>
                 {
                     currentUser ?
                     // when user is sign in
                            <motion.img 
                            onClick={() => setIsMenu(!isMenu)}
                            whileTap={{scale: .6}}
                            src={currentUser? currentUser?.photoURL : Avatar} 
                            alt='' className='avatar rounded-full option'

                            />  
                    :
                        <Link className='option hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' to='/signin' >
                            LOGIN
                        </Link>
                 }

                 {
                     isMenu && (
                    <motion.div 
                     initial={{opacity: 0, scale: 0.6}}
                     animate={{opacity: 1, scale: 1}}
                     exit={{opacity: 0, scale: 0.6}}
                     className='w-10 bg-gray-50 shadow-x1 rounded-lg flex flex-col absolute top-20 right-24'>
                    <Link to='/userhome'>
                    <p onClick={() => setIsMenu(false)} className='px-4 py-2 cursor-pointer flex items-center gap-3 hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Profile <IoMdContact /> </p>
                    </Link>
                    <p onClick={logOut} className='px-4 py-2 cursor-pointer flex items-center gap-3 hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Logout <MdLogout /></p>
                 </motion.div> 
                     )
                 }

                 <div>
                 <Link className='options' to="/farmers" >
                    <button 
                        className='get-started'>
                        <span className='get-started-btn'>Market place</span>
                    </button>
                 </Link>
                 </div>
        </div>
        <Link to="/farmers">
            <button className='products'>
                Market place
            </button>
        </Link>
        </nav>
    );
}


const mapInitialStateToProps = ({user: {currentUser}, cart: {hidden} })=> ({
    currentUser,
    hidden
})


export default connect(mapInitialStateToProps)(Header);