import { FaMapMarkerAlt } from "react-icons/fa";
import "tachyons";


const ProductSubmitted = ({ filteredProducts, products }) =>{

        return ( 
            
                   <section className='farmer-card ml4'>
             {filteredProducts.map(i => 
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
                            </div>  
                        </div>
    
                      </main>)
                      }
           </section>
         );

}

export default ProductSubmitted;