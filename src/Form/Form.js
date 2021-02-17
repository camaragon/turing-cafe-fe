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

    render() {
        return (
            <form className='resy-form'>
                <input type='text' placeholder='Name'></input>
                <input type='text' placeholder='Date (mm/dd)'></input>
                <input type='text' placeholder='Time'></input>
                <input type='text' placeholder='Number of guests'></input>
                <button className='form-button'>Make Reservation</button>
            </form>
        )
    }
}

export default Form;