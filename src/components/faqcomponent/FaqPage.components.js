import React, { useState } from 'react';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import './Faq.component.scss'


const Question = ({title, info}) =>{
    const [showInfo, setShowInfo] = useState(false);
    return(
           <article>
             <div className='faq-container'>
                <h1>{title}</h1> 
                <button className='btn' onClick={() => setShowInfo
                 (!showInfo)}>
                    {
                        showInfo? 
                        <AiOutlineClose /> :
                        <AiOutlinePlus />
                    }
                </button>             
             </div>
             {showInfo && <p className='answers'>{info}</p>}
        
           </article>
    );
}

export default Question;

