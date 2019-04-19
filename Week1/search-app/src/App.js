import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap'
import SearchForm from './Components/SearchForm'
import Results from './Components/Results'

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <h1>Search App</h1>
            <p>This is a simple search app</p>
            <SearchForm />
          </Container>
        </Jumbotron>;
        <Results />

      </div>
    );
  }
}

export default App;
