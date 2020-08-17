import React, { Component } from 'react';

export default class CardBottom extends Component {

    render(){
        const card = this.props.card
        return(
            <div className="card-bottom-container">
                <p>{card.text}</p>
            </div>
        )
    }
}