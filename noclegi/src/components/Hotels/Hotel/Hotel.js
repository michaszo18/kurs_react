import React from 'react';
import hotelImg from '../../../assets/hotels/Ritz_Riyadh_00043_Home.jpg'

export default () => {
    return (
        <div className="row my-4">
            <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-3 shadow p-3 mb-5 bg-body rounded">
                <h3>Hotel name</h3>
                <img src={hotelImg} className="img-fluid rounded"/>
                <div className="row mt-3">
                    <p className="col-6"><b>City</b></p>
                    <p className="col-6">Street 123</p>
                </div>
                <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                <a class="btn btn-outline-primary" type="button">show</a>
            </div>
        </div>
    );
}