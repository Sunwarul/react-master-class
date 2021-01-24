import React from 'react';
import './custom-button.styles.scss';

export const CustomButton = ({ children, myClass, inverted = null, ...otherProps }) => (
    <button className={`${inverted ? 'inverted' : ''} custom-button ${myClass} `} {...otherProps}>
        {children}
    </button>
)