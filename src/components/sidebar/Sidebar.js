import { sidebarData } from '../Sidebar.data';
import {useState} from 'react';
import Avatar from '../../assets/avatar.png';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { Navigate } from 'react-router';
import './Sidebar.scss';


const Sidebar = ({currentUser}) => {

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };

    return ( 
        <div className='sidebar'>
            
            <section className='sidebar-list'>
            <div id="avatar-icon">
                <img 
                className='rounded-full'
                src={currentUser? currentUser.photoURL : Avatar}
                alt='avatar' />
            </div>
            <div id='username'>{currentUser && <p>{currentUser.displayName}</p> }</div>
                <h5 id='navigation'> Nwaste</h5>
            {sidebarData.map((val, key)=> {
                return (
                    <ul>
                        <li 
                        className='items' 
                        id={window.location.pathname  === val.link? "active": ''}
                        key={key} 
                        onClick={()=>{<Navigate to={val.link} />}}>
                            <div  id="icon" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{val.icon}</div>
                            <div id="title">{val.title}</div>
                            {isHovering && <div key={val.id} className='hover-title'>{val.title}</div>}
                        </li>
                    </ul>

                )
            })}
            </section>
        </div>
     );
}

const mapInitialStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})
 
export default connect(mapInitialStateToProps)(Sidebar);