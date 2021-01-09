import React from 'react';
import './custom-button.styles.scss';

export const CustomButton = ({ children, inverted = null, ...otherProps }) => (
    <button className={`{inverted ? 'inverted' : ''} custom-button `} {...otherProps}>
        {children}
    </button>
)