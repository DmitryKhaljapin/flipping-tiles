import React from 'react';
import styles from './RoundBanner.module.scss';

export const RoundBanner = () => {
    return (
        <p className={styles.banner}>Round <span className={styles.number}>1</span></p>
    )
};