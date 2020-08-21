import React, { Component } from 'react';
import Searchbar from './Searchbar'

export default class Navbar extends Component {
    render() {
        
        return(
          <div className="navbar">
              Hello
              <br></br>
              <Searchbar search={this.props.search} filterSearch={this.props.filterSearch} />
              <button className="toggle" onClick={this.props.toggleForm}>Add Card</button>
          </div>
        )
    }
}