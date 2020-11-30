import React, { Component } from 'react';
import { Card } from '../card/Card';
import './car-list.css'

class CardList extends Component {
    render() {
        return (
            <div className="card-list">
                {this.props.monsters.map(monster => (
                    <Card key={monster.id} monster={monster} />
                ))}
            </div>
        );
    }
}

export default CardList;