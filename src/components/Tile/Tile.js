import React, { useState } from 'react';
import { Card } from '../UI';
import styles from './Tile.module.scss';
import cn from 'classnames';

export const Tile = () => {

    const [flipped, setFlipped] = useState(false);

    return (
        <Card className={styles.tile}>
            <div className={cn(styles.inner, {
                [styles.flipped]: flipped
            })}
                onClick={() => setFlipped(true)}
            >
                <div className={styles.face}></div>
                <div className={styles.back}></div>
            </div>
        </Card>
    )
}
