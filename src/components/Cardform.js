import React, { Component } from 'react';
import Card from './Card'

export default class Cardform extends Component {
    // state = {
    //     card: {}
    // }

    // handlePreview = () => {
    //     let card = {
    //       name: document.querySelector("#name-input")
    // //       mana_cost: mana_cost.value,
    // //       img_url: img_url.value,
    // //       spell_type: spell_type.value,
    // //       description: description.value,
    //     }
    //     console.log(card)
    //     this.setState({card})
    // }

    render() {
        
        return(
          <div className="cardform">
              Card Form
              <div id="preview">
                Preview: <Card card={this.props.card} key={this.props.card.id} />
                <button onClick={this.props.handlePreview}>test out card</button>
                </div>
                <form onSubmit={this.props.handleSubmit}>
                    <label htmlFor="name-input">Enter Name: </label>
                    <input id="name-input" type="text" name="name" placeholder="Enter Card Name" /><br></br>
                    <label htmlFor="mana-input">Enter Mana: </label>
                    <input id="mana-input" type="text" name="mana_cost" placeholder="Mana Cost" /><br></br>
                    <label htmlFor="image-input">Enter Image Url: </label>
                    <input id="image-input" type="text" name="img_url" placeholder="Enter Card Image Url" /><br></br>
                    <label htmlFor="type-input">Enter Spell Type: </label>
                    <input id="type-input" type="text" name="spell_type" placeholder="Enter Spell Type" /><br></br>
                    <label htmlFor="description-input">Enter Description: </label>
                    {/* <input id="description-input" type="text" name="description" placeholder="Enter Card Description" /><br></br> */}
                    <textarea id="description-input" name="description" placeholder="Enter Text Here"></textarea>
                    <button type="submit">Submit New Card</button>
                </form>
                

              <br></br>
              <button className="toggle" onClick={this.props.toggleForm}>Go to Nav</button>
          </div>
        )
    }
}