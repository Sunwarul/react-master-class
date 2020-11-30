import React from 'react';
import './card.css'

export const Card = (props) => {
    return (
        <div className="card">
            <div>
                <img alt={props.monster.name} src={`http://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
            </div>
            <div>
                {props.monster.name}
            </div>
        </div>
    )
}