import React from 'react';
import styles from './SearchBar.module.css'
import { BsSearch } from 'react-icons/bs';

export default () => {
    return (
        <div className="row my-5">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Recipient's username" />
                <button className="input-group-text">
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}