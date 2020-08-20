import React, { Component } from 'react';

export default class PreviewCard extends Component {
    render() {
        const card = this.props.cardInfo
        return(
            <div className="card">
                <div className="card-info-container">
                    <div className="card-top">
                        <div className="card-top-header">
                            <p className="card-name">{card.pName}</p>
                            <p className="card-mana-cost">{card.pMana}</p>
                        </div>
                        <div className="card-image-container">
                            <img className="card-image" src={card.pImg} alt={card.pName}></img>
                        </div>
                        <div className="card-top-footer">
                            <p className="card-footer-type">{card.pType}</p>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <p className="card-text">{card.pDesc}</p>
                    </div>
                </div>
            </div>
        )
    }
}