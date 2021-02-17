import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => {
      this.setState({reservations: data})
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form />
        <Reservations reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
