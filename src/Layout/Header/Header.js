import React from 'react';
import styles from './Header.module.scss';

export const Header = ({children}) => {
    return (
        <header className={styles.header}>
            {children}
        </header>
    );
}