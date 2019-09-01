import React, { Component } from 'react';
import logo from './star.svg';
import DropdownList from './components/DropdownList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/films/';

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          movies: data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <main className="container text-center mt-3 pt-3">
          <section>
            <img src={logo} alt={logo} className="h-100 d-inline-block" />
          </section>

          <section className="mt-5 row">
            <div className="col-md-8 offset-md-2">
              <DropdownList result={this.state.movies.results} />
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}
