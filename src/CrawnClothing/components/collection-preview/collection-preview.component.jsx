import React from 'react';
import './collection-preview.styles.scss';

export const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {items.filter((item, index) => index < 5).map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    </div>
)