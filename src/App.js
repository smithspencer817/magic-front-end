import React, { Component } from 'react';
import Card from './components/Card'
import Navbar from './components/Navbar'
import Cardform from './components/Cardform'
import "./App.css"

const CARD_API = "http://localhost:3000/cards"

export default class App extends Component {

  state = {
    cards: [],
    displayForm: true,
    newcard: {},
    pName: "",
    pMana: "",
    pImg: "",
    pType: "",
    pDesc: "",
  }

  previewName = (e) => {
    
  }


  // handlePreview = () => {
  //   let card = {
  //     name: document.querySelector("#name-input").value,
  //     mana_cost: document.querySelector("#mana-input").value,
  //     img_url: document.querySelector("#image-input").value,
  //     spell_type: document.querySelector("#type-input").value,
  //     description: document.querySelector("#description-input").value,
  //   }
  //   console.log(card)
  //   this.setState({newcard: card})
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    
    let card = {
      name: e.target.name.value,
      mana_cost: e.target.mana_cost.value,
      img_url: e.target.img_url.value,
      spell_type: e.target.spell_type.value,
      description: e.target.description.value,
    }
    console.log(card)
  }

  toggleForm = () => {
    const newform = !this.state.displayForm
    this.setState({displayForm: newform})
  }

  componentDidMount() {
    fetch(CARD_API)
    .then(res => res.json())
    .then(cards => this.setState({cards: cards}))
  }

  render() {
    return(
      <div>
        <h1>Card Collection</h1>
        {
          this.state.displayForm ? <Cardform toggleForm={this.toggleForm} handleSubmit={this.handleSubmit} handlePreview={this.handlePreview} previewName={this.previewName} card={this.state.newcard}/> : <Navbar toggleForm={this.toggleForm}/>
        }
        <div className="card-container">
          {
            this.state.cards.map(card => <Card card={card} key={card.id}/>)
          }
        </div>
      </div>
    )
  }
}

