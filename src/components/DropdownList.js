import React, { Component } from 'react';
import MovieDetails from './MovieDetails';

export default class DropdownList extends Component {
  state = {
    selectedMovie: ''
  };

  handleChange = e => {
    this.setState({ selectedMovie: e.target.value });
  };

  render() {
    console.log(this.state.selectedMovie);

    if (!this.props.result) {
      return (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    return (
      <React.Fragment>
        <select className="custom-select custom-select-lg mb-3" onChange={this.handleChange}>
          <option> Select a movie </option>
          {this.props.result.map((item, i) => (
            <option key={i}>{item.title}</option>
          ))}
        </select>

        <MovieDetails />
      </React.Fragment>
    );
  }
}
