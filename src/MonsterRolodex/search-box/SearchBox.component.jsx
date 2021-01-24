import React from 'react';
import './search-box.styles.css';

export const SearchBox = (props) => {
    return (
        <input type="search"
            onChange={props.handleChange}
            placeholder={props.placeholder}
            className="search-box"
        />
    )
}
