import React from 'react';
import styles from './nav.module.css'

const Nav = (props) => (
    <div className={styles.container}>
        <span className={styles.box}>
            <i className={styles.iconRed} class="fab fa-youtube"></i>
            <span className={styles.text}>Youtube</span>
        </span>
        <span className={styles.box}>
            <input className ={styles.searchBar}type="text" />
        </span>
        <span className={styles.box}>

        </span>
    </div>
    
    );

export default Nav;