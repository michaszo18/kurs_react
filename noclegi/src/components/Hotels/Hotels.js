import PropTypes from 'prop-types';
import Hotel from './Hotel/Hotel'

const propTypes = {
    hotels: PropTypes.array.isRequired
}

const Hotels = (props) => {
    return (
        <div className="container">
            {props.hotels.map(hotel => <Hotel key={hotel.id} {...hotel} />)}
        </div>
    )
}

Hotels.propTypes = propTypes;

export default Hotels;