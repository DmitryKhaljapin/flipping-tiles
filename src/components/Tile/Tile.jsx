import React, { useState } from 'react';
import { Card } from '../UI';
import styles from './Tile.module.scss';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { addTileAction } from '@/store/Reducers'; 

export const Tile = ({id, color, isDisappered}) => {

    const dispatch = useDispatch();
    const selectedTiles = useSelector(store => store.selectedTiles.selectedTiles);

    const [faceColor, setFaceColor] = useState('#FFFFFFF');

    function clickHandler() {
        if (selectedTiles.length === 2) return;
        if (selectedTiles?.[0]?.id === id) return;

        dispatch(addTileAction({id, color}));
        setFaceColor(color);
    }

    return (
        <div className={styles.tile}>
            <div className={cn(styles.inner, {
                [styles.flipped]: !isDisappered && selectedTiles.some(tile => tile.id === id),
                [styles.disappered]: isDisappered,
            })}
                onClick={clickHandler}
            >
                <Card className={styles.face} style={{background: faceColor}}></Card>
                <Card className={styles.back}></Card>
            </div>
        </div>
    )
}
