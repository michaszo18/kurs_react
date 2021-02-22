import React from 'react';
import SearchBar from './SearchBar/SearchBar'
import styles from './Header.module.css'


export default () => {
    return (
        <header className={styles.header}>
            <SearchBar />
        </header>
    );
}

