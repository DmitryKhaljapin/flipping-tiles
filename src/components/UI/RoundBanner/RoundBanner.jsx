import React from 'react';
import styles from './RoundBanner.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

export const RoundBanner = ({className}) => {

    const roundCounter = useSelector(state => state.round.roundCounter);

    return (
        <p className={cn(styles.banner, className)}>Round <span className={styles.number}>{roundCounter}</span></p>
    )
};