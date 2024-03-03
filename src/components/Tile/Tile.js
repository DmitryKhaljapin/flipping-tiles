import React from 'react';
import { Card } from '../UI';
import styles from './Tile.module.scss';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { addTileAction } from '@/store/Reducers/selectedTilesReducer'; 

export const Tile = ({id, faceColor, isDisappered}) => {

    const dispatch = useDispatch();
    const selectedTiles = useSelector(store => store.selectedTiles.selectedTiles);

    function clickHandler() {
        dispatch(addTileAction({id, color: faceColor}));
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
