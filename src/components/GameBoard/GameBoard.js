import React, { useEffect } from 'react';
import { Card } from '../UI'
import styles from './GameBoard.module.scss';
import { Tile } from '../Tile/Tile';
import { useSelector, useDispatch } from 'react-redux';
import { clearSelectedTilesListAction } from '../../store/Reducers/selectedTilesReducer';
import { setDisapperedAction } from '../../store/Reducers/tilesReducer';

export const GameBoard = () => {

    const dispatch = useDispatch();
    const tiles = useSelector(state => state.tiles.tiles);
    const selectedTiles = useSelector(store => store.selectedTiles.selectedTiles);

    useEffect(() => {
        if (selectedTiles.length === 2) setTimeout(() => {
            if (selectedTiles[0].color === selectedTiles[1].color) dispatch(setDisapperedAction(selectedTiles))
            dispatch(clearSelectedTilesListAction());
        }, 800)
    }, [selectedTiles]);

    return (
        <Card className={styles['game-board']}>
            {tiles.map(tile => <Tile key={tile.id} id={tile.id} faceColor={tile.color} isDisappered={tile?.isDisappered} />)}
        </Card>
    );
}