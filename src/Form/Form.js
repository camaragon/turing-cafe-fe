import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            number: 0
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form className='resy-form'>
                <input 
                    type='text' 
                    placeholder='Name' 
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}>

                </input>
                <input 
                    type='text' 
                    placeholder='Date (mm/dd)' 
                    name='date'
                    value={this.state.date}
                    onChange={this.handleChange}>

                </input>
                <input 
                    type='text' 
                    placeholder='Time' 
                    name='time'
                    value={this.state.time}
                    onChange={this.handleChange}>

                </input>
                <input 
                    type='text' 
                    placeholder='Number of guests' 
                    name='number'
                    value={this.state.number}
                    onChange={this.handleChange}>

                </input>
                <button className='form-button'>Make Reservation</button>
            </form>
        )
    }
}

export default Form;