import React from 'react';
import './collection-item.styles.scss';

export const CollectionItem = ({ id, name, imageUrl, price }) => (
    <div className="collection-item">
        <div className="image">
            <img src={imageUrl} alt={`with-id-${id}`} />
        </div>
        <div className="collection-footer">
            <div className="name">{name}</div>
            <div className="price">{price}</div>
        </div>
    </div>
)