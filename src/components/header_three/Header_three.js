import { Link } from 'react-router-dom';
import Logo from '../../assets/logo1.png';
import { GoThreeBars } from "react-icons/go";
import './header_three.scss';


const HeaderThree = () => {
    return ( 
        <nav className="headerThree-nav">
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

            <label htmlFor='nav-toggle' className='nav-toggle-label'>
                    <span style={{color: 'dodgerblue'}}>
                        <GoThreeBars className='hamburger-btn' size='32px' />
                    </span>
            </label>

            <button >
            <Link className='product-btn' to='/submitform'>Submit Products</Link>
            </button>
        </nav>
     );
}
 
export default HeaderThree;