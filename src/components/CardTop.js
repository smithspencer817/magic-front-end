import React, { Component } from 'react';

export default class CardTop extends Component {

    render(){
        const card = this.props.card
        return(
            <div className="card-top-container">
                <div className="card-top-header">
                    <h4>{card.name}</h4>
                    <h4>{card.manaCost}</h4>
                </div>
                <div className="card-image">
                    <img src={card.imageUrl} alt={card.name}></img>
                </div>
                <div className="card-top-footer">
                    <h4>{card.type}</h4>
                </div>
            </div>
        )
    }
}