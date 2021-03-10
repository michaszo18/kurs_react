import PropTypes from 'prop-types';
import hotelImg from '../../../assets/hotels/Ritz_Riyadh_00043_Home.jpg';

const propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

const Hotel = (props) => {
    return (
        <div className="row my-4">
            <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-3 shadow p-3 mb-5 bg-body rounded">
                <span className="badge bg-success">{props.rating}</span>
                <h3 className="mt-2">{props.name}</h3>
                <img src={hotelImg} className="img-fluid rounded" alt="" />
                <div className="row mt-3">
                    <p className="col-6"><b>{props.city}</b></p>
                    <p className="col-6">{props.street}</p>
                </div>
                <p>{props.description}</p>
                <a href="./" className="btn btn-outline-primary" type="button">show</a>
            </div>
        </div>
    );
}

Hotel.propTypes = propTypes;

export default Hotel;