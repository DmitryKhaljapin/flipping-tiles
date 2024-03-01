import React from 'react';
import { Card } from '../UI';
import styles from './Tile.module.scss';
import cn from 'classnames';

export const Tile = () => {
    return (
        <Card className={styles.tile} />
    )
}
