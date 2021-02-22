import React from 'react';
import styles from './SearchBar.module.css'
import { BsSearch } from 'react-icons/bs';

export default () => {
    return (
        <div className="row mb-5">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 mb-4">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Wyszukaj" />
                    <button className="input-group-text">
                        <BsSearch />
                    </button>
                </div>
            </div>
        </div>
    )
}