import React, { Component } from 'react';
import MovieDetails from './MovieDetails';

export default class DropdownList extends Component {
  state = {
    selectedMovieID: ''
  };

  handleChange = e => {
    this.setState({ selectedMovieID: this.refs.movieSelector.value });
  };

  render() {
    if (!this.props.result) {
      return (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    const selectedMovies = this.props.result.find(
      movie => movie.title.toLowerCase() === this.state.selectedMovieID.toLowerCase()
    );

    return (
      <React.Fragment>
        <select
          className="custom-select custom-select-lg mb-3"
          onChange={this.handleChange}
          ref="movieSelector"
          value={this.state.selectedMovieID}
        >
          <option>All</option>
          {this.props.result.map((item, i) => (
            <option key={i} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>

        <MovieDetails details={selectedMovies} />
      </React.Fragment>
    );
  }
}
