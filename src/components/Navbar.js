import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        
        return(
          <div className="navbar">
              Hello
              <br></br>
              <button className="toggle" onClick={this.props.toggleForm}>Add Card</button>
          </div>
        )
    }
}