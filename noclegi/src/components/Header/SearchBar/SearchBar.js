import React, { useState } from 'react';
import styles from './SearchBar.module.css'
import { BsSearch } from 'react-icons/bs';

export default () => {
    const [term, setTerm] = useState('');

    const search = () => {
        console.log(term);
    }

    return (
        <div className="row mb-5">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 mb-4">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Wyszukaj"
                        value={term}
                        onKeyDown={e => { e.key === "Enter" && search() }}
                        onChange={e => {
                            setTerm(e.target.value);
                        }}
                    />
                    <button className="input-group-text"
                        onClick={search}
                    >
                        <BsSearch />
                    </button>
                </div>
            </div>
        </div>
    )
}