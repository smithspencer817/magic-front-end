import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        const card = this.props.card
        return(
            <div className="card">
                <div className="card-info-container">
                    <div className="card-top">
                        <div className="card-top-header">
                            <p className="card-name">{card.name}</p>
                            <p className="card-mana-cost">{card.manaCost}</p>
                        </div>
                        <div className="card-image-container">
                            <img className="card-image" src={card.imageUrl} alt={card.name}></img>
                        </div>
                        <div className="card-top-footer">
                            <p className="card-footer-type">{card.type}</p>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <p className="card-text">{card.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}