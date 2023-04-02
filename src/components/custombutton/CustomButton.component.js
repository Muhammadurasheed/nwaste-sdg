import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ children, inverted, ...OtherProps }) =>{
    return(
          <button className={`${inverted ? 'inverted': ''} custom-button`}
          {...OtherProps}>
             {children}
          </button>
    );
}

export default CustomButton;