import React from 'react';
import TopMenu from './TopMenu/TopMenu'
import styles from './Header.module.css'


const Header = (props) => {
    return (
        <header className={[styles.header, 'container-fluid'].join(' ')}>
            <div className={`row`}>
                <div className="col-12 mt-5">
                    <h1>
                        <a href="#" className={styles.title}>Noclegi</a>
                    </h1>
                </div>
            </div>
            <TopMenu />
            {props.children}
        </header>
    );
}

export default Header;