import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <form className='resy-form'>
                <input type='text'></input>
                <input type='text'></input>
                <input type='text'></input>
                <input type='text'></input>
                <button>Make Reservation</button>
            </form>
        )
    }
}

export default Form;