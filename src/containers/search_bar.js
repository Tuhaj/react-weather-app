import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input className="form-control"
               placeholder="Get weather forecast for your favourite cities"
               value={this.state.term}
               onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
