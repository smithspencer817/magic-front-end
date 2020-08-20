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
                            <p className="card-mana-cost">{card.mana_cost}</p>
                        </div>
                        <div className="card-image-container">
                            <img onClick={this.props.editCard} className="card-image" src={card.img_url} alt={card.name}></img>
                        </div>
                        <div className="card-top-footer">
                            <p className="card-footer-type">{card.spell_type}</p>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <p className="card-text">{card.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}