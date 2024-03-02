import React, { useState } from 'react';
import { Card } from '../UI';
import styles from './Tile.module.scss';
import cn from 'classnames';

export const Tile = ({id, faceColor}) => {

    const [flipped, setFlipped] = useState(false);

    return (
        <div className={styles.tile}>
            <div className={cn(styles.inner, {
                [styles.flipped]: flipped
            })}
                onClick={() => setFlipped(true)}
            >
                <Card className={styles.face}></Card>
                <Card className={styles.back}></Card>
            </div>
        </div>
    )
}
