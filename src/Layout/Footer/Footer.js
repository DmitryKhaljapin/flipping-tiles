import React from 'react';
import styles from './Footer.module.scss';

export const Footer = ({children}) => {
    return (
        <footer className={styles.footer}>{children}</footer>
    )
};