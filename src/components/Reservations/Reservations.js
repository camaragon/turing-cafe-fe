import React from 'react';
import './Reservations.css';
import Card from '../Card/Card';

const Reservations = ({reservations}) => {
    const reservationCards = reservations.map(reservation => {
        return (
            <Card
                key={reservation.id}
                name={reservation.name}
                date={reservation.date}
                time={reservation.time}
                number={reservation.number}
            />
        )
    })
    return (
        <section className='resy-container'>
            {reservationCards}
        </section>
    )
}

export default Reservations;