import React, { Component } from 'react';
import GenderFilter from './GenderFilter';

export default class CharacterTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      selectGender: ''
    };
  }

  handleGenderChange = e => this.setState({ selectGender: e.target.value });

  componentDidMount() {
    const url = 'https://swapi.co/api/people/';

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          characters: data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (!this.state.characters.results) {
      return (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    const filteredCharacters = this.state.characters.results.filter(people =>
      this.props.data.includes(people.url)
    );

    const filterGender = filteredCharacters.filter(
      item => item.gender.toLowerCase() === this.state.selectGender.toLowerCase()
    );

    const result = filteredCharacters.map(item => Number(item.height));

    const tofeet = n => {
      let realFeet = (n * 0.3937) / 12;
      let feet = Math.floor(realFeet);
      let inches = Math.round((realFeet - feet) * 12);
      return `${feet}ft/ ${inches}in`;
    };

    return (
      <React.Fragment>
        <GenderFilter
          GenderSelect={this.handleGenderChange}
          selectGender={this.state.selectGender}
        />

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Height</th>
            </tr>
          </thead>
          <tbody>
            {filterGender.length === 0
              ? filteredCharacters.map((item, i) => (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.height}</td>
                  </tr>
                ))
              : filterGender.map((item, i) => (
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.height}</td>
                  </tr>
                ))}

            <tr>
              <td>Total character: {result.length} </td>
              <td></td>
              <td>
                Total in height : {result.reduce((a, b) => a + b)}cm (
                {tofeet(result.reduce((a, b) => a + b))})
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
