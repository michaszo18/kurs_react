import React from 'react';
import Hotel from './Hotel/Hotel'

export default class Hotels extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.hotels.map(hotel => <Hotel key={hotel.id} {...hotel} />)}
            </div>
        )
    }
}