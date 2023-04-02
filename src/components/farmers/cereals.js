import React, { useState } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import ProductPopup from '../product-popup/ProductPopup';
import Direction from '../direction/Direction.component';
import SkeletonProduct from '../skeleton/SkeletonProduct';


const Cereals = ({ filteredProducts, addItem, products }) => {
  const [loading, setLoading] = useState(false);
  const [popupBtn, setPopupBtn] = useState(false);
    const data2 = filteredProducts?.filter(n => n.category === 'Cerealsandlegumes');
    return ( 
        <div>
           { !loading && products.length ?
            <div>
               <section className='farmer-card ml4'>
         {data2.map(i => 
              <main className='farm-products dib' key={i.id}>
                   <div className='for-hovering'>
                        <img src={i.imageURL} alt="images" 
                        className="img" />
                        <div className='product-detail ml3'>
                          <h3 className='name'> {i.title}</h3>
                          <div className='flex-wrapper'>
                          <FaMapMarkerAlt className='location'/>
                          <span><h4>{i.location}</h4></span>
                          </div>
                          <h4 className='price'>${i.price}</h4>
                          <button className='cart-button' onClick={() => addItem(i)}>
                          Add to cart
                          </button>
                        </div>  
                    </div>

                    <button 
                    className="show-detail"
                    onClick={() => setPopupBtn(true)}>
                      Details
                  </button>
                    <ProductPopup trigger={popupBtn} setTrigger={setPopupBtn}>
                        <Direction />
                    </ProductPopup>
                  </main>)
                  }
       </section>
            </div> : [1,2,3,4,5,6,7,8].map((loader) => (
                 <div className='farm-products dib' key={loader.id}>
                    <SkeletonProduct />
                 </div>
            ))
            }
        </div>
     );
}

export default Cereals;