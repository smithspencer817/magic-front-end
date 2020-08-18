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
                            <h6 className="card-footer-type">{card.type}</h6>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="card-text">{card.text}</div>
                    </div>
                </div>
            </div>
        )
    }
}