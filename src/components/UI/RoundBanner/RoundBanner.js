import React from 'react';
import styles from './RoundBanner.module.scss';
import cn from 'classnames';

export const RoundBanner = ({className}) => {
    return (
        <p className={cn(styles.banner, className)}>Round <span className={styles.number}>1</span></p>
    )
};