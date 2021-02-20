import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations'
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
    })
    .catch(err => {
      console.error(err);
    });
  }

  // componentDidUpdate = () => {
  //   fetch('http://localhost:3001/api/v1/reservations')
  // }

  addReservation = (newResy) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newResy)
    })
    .then(response => response.json())
    .then(data => this.setState({ reservations: [...this.state.reservations, data] }))
    .catch(error => console.error(error))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
        <Reservations reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
