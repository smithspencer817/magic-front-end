import React, { Component } from 'react';
import CardTop from './CardTop'
import CardBottom from './CardBottom';


export default class Card extends Component {
    render(){
        const card = this.props.card
        return(
            <div>
                <CardTop card={card} key={card.id}/>
                <CardBottom card={card} key={card.id} />
            </div>
        )
    }
}