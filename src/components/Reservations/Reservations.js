import React from 'react';
import './Reservations.css';
import Card from '../Card/Card';

const Reservations = ({reservations, deleteReservation}) => {
    const reservationCards = reservations.map(reservation => {
        return (
            <Card
                key={reservation.id}
                name={reservation.name}
                date={reservation.date}
                time={reservation.time}
                number={reservation.number}
                deleteReservation={deleteReservation}
                id={reservation.id}
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