import React from 'react';
import Hotel from './Hotel/Hotel'

export default class Hotels extends React.Component {
    render() {
        return (
            <div className="container">
                <Hotel/>
                <Hotel/>
                <Hotel/>
            </div>
        )
    }
}