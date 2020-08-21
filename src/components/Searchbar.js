import React, { Component } from 'react';

export default class Searchbar extends Component {
    render() {
    const search = this.props.search    
        return(
          <div>
              <label htmlFor="search-input">Search:</label>
              <input onChange={this.props.filterSearch} id="search-input" type="text" name="name" placeholder="Enter Card Name" value={search.searchCards}/>
          </div>
        )
    }
}