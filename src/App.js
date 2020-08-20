import React, { Component } from 'react';
import Card from './components/Card'
import Navbar from './components/Navbar'
import Cardform from './components/Cardform'
import "./App.css"
import { waitForDomChange } from '@testing-library/react';
import { Form } from 'react-bootstrap';

const CARD_API = "http://localhost:3000/cards"

export default class App extends Component {

  state = {
    cards: [],
    displayForm: true,
    pName: "",
    pMana: "",
    pImg: "",
    pType: "",
    pDesc: "",
    editCard: null,
  }

  previewCard = (e) => {
    switch(e.target.name) {
      case "name":
        this.setState({
          pName: e.target.value
        })
        break;
      case "mana_cost":
        this.setState({
          pMana: e.target.value
        })
        break;
      case "img_url":
        this.setState({
          pImg: e.target.value
        })
        break;
      case "spell_type":
        this.setState({
          pType: e.target.value
        })
        break;
      case "description":
        this.setState({
          pDesc: e.target.value
        })
        break;
      default:
        console.log("not recognized")
      }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let newCard = {
      name: e.target.name.value,
      mana_cost: e.target.mana_cost.value,
      img_url: e.target.img_url.value,
      spell_type: e.target.spell_type.value,
      description: e.target.description.value,
    }
   
    if (this.state.editCard === null) { 

      fetch(CARD_API, {
        method: "POST",
        headers: {
        accept: "application/json",
        "content-type": "application/json"
        },
        body: JSON.stringify(newCard)
      })
      .then(res => res.json())
      .then(nCard => this.setState({
        cards: [...this.state.cards, nCard],
        pName: "",
        pMana: "",
        pImg: "",
        pType: "",
        pDesc: "",
      }))

     } else {

      fetch(`${CARD_API}/${this.state.editCard.id}`, {
        method: "PATCH",
        headers: {
        accept: "application/json",
        "content-type": "application/json"
        },
        body: JSON.stringify(newCard)
      })
      .then(res => res.json())
      .then(json => {
        const updatedArr = this.state.cards.map(c => {
          if (c.id === this.state.editCard.id){
            return json
          }
          return c
        })
        this.setState({
          cards: updatedArr,
          editCard: null,
          pName: "",
          pMana: "",
          pImg: "",
          pType: "",
          pDesc: "",
        })
      })

    }
    
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

  editCard = (card) => {
    this.setState({
      editCard: card,
      pName: card.name,
      pMana: card.mana_cost,
      pType: card.spell_type,
      pDesc: card.description,
      pImg: card.img_url,
    })
  }

  render() {
    return(
      <div>
        <h1>Card Collection</h1>
        {
          this.state.displayForm ? <Cardform toggleForm={this.toggleForm} handleSubmit={this.handleSubmit} previewCard={this.previewCard} cardInfo={this.state} /> : <Navbar toggleForm={this.toggleForm}/>
        }
        <div className="card-container">
          {
            this.state.cards.map(card => <Card cardInfo={this.state} handleEdit={this.editCard} editCard={this.state.editCard} card={card} key={card.id}/>)
          }
        </div>
      </div>
    )
  }
}

