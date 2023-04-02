import { FaSistrix } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import Logo from '../../assets/logo1.png';
import CartIcon from '../cart-icon/Cart-icon.component';
import { connect } from 'react-redux';
import CartDropdown from '../cart-dropdown/Cart-dropdown.component';
import { GoThreeBars } from "react-icons/go";
import { BsMicFill } from 'react-icons/bs';
import './Header_two.scss';


const HeaderTwo = ({ sttFromMic, setSearch, currentUser, hidden, search, clearBtn  }) => {

    return ( 
        <nav>
         <div className="nav-container">
            <Link to='/'>
             <div> 
                <div className='logo-container' title='Go to home page!'>
                    <div className='col'>
                    <img className='logo' alt='logo' src={Logo} style={{height: '65px', width: '65px'}}/> 
                    <div className='text-2 col'>
                        Nwaste
                    </div>
                </div>
                </div>    
            </div> 
            </Link>

            <div className="search">
                <input
                type='search'
                onChange={(e) => setSearch(e.target.value)}
                className="input" 
                placeholder="Search. . ."
                />
                
                <div className="search-icon">
                
                   <div>
                   {
                      !search.length?  <FaSistrix /> : <AiOutlineClose onClick={clearBtn}/>
                    }
                   </div>
                    <BsMicFill onClick={sttFromMic} className="mic-icon" />
                </div>
            </div>
            <div className='cart-icon'><CartIcon /></div>

            <input type="checkbox" className="nav-toggle" id='nav-toggle'/>
            <label htmlFor='nav-toggle' className='nav-toggle-label'>
                    <span style={{color: '#0F9D58'}}>
                        <GoThreeBars className='hamburger-btn' size='32px' />
                    </span>
            </label>
            <div className='options h2-options'>
                <Link className='option' to='/about'>
                    ABOUT
                </Link>
                <Link className='option' to='/loan' >
                    LOAN
                </Link>
                <Link className='option' to='/faq' >
                    FAQs
                </Link>   
               
            </div>
            {
                hidden? null :
                <CartDropdown />
            }
          </div>
        </nav>
     );
}

const mapInitialStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
 
export default connect(mapInitialStateToProps)(HeaderTwo);