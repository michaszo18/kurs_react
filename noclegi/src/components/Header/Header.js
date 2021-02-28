import React from 'react';
import SearchBar from './SearchBar/SearchBar'
import TopMenu from './TopMenu/TopMenu'
import styles from './Header.module.css'


export default (props) => {
    return (
        <header className={[styles.header, 'container-fluid'].join(' ')}>
            <div className={`row`}>
                <div className="col-12 mt-5">
                    <h1>
                        <a href="#" className={styles.title}>Noclegi</a>
                    </h1>
                </div>
            </div>
            <TopMenu/>
            <SearchBar onSearch={props.onSearch} />
        </header>
    );
}

