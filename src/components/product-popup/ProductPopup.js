import './ProductPopup.scss';
import { AiOutlineClose } from 'react-icons/ai'


const ProductPopup = (props) => {
    return ( (props.trigger) ?
       ( <div className='product-popup'>
            <div className='product-popup-inner'>
            <AiOutlineClose className='close-btn'
                onClick={() => props.setTrigger(false)}
            />
            {props.children}
            
            </div>
        </div>) : ''
     );
}
 
export default ProductPopup;