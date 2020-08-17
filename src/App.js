import React, { Component } from 'react';
import Card from "./components/Card"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const CARD_API = "https://api.magicthegathering.io/v1/cards"

export default class App extends Component {

  state = {
    cards: []
  }

  componentDidMount() {
    fetch(CARD_API)
    .then(res => res.json())
    .then(cards => this.setState({
      cards: cards.cards
    }))
  }

  render() {
    return(
      <div className="card-container">
        {
          this.state.cards.map(card => <Card card={card} key={card.id}/>)
        }
      </div>
    )
  }
}

