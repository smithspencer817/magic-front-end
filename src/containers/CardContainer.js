import React, { Component } from 'react';
import Card from '../components/Card'

export default class Navbar extends Component {
    render() {
        const props = this.props
        
        const cardsArr = [...props.cards].map(c => {
            c.name.toLowerCase()
        return c
        })

        const filteredCards = cardsArr.filter(c => {
            return c.name.includes(props.searchCards)
          })
        
        return(
          <div className="card-container">
              
              {filteredCards.map(card => <Card cardInfo={props.cardInfo} handleDelete={props.handleDelete} handleEdit={props.handleEdit} editCard={props.editCard} card={card} key={card.id}/>)}
          </div>
        )
    }
}