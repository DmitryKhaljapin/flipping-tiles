import React from 'react';
import { Card } from '../UI'
import styles from './GameBoard.module.scss';
import { Tile } from '../Tile/Tile';
import { useSelector } from 'react-redux';

export const GameBoard = ({children}) => {

    const tiles = useSelector(state => state.tiles.tiles);

    return (
        <Card className={styles['game-board']}>
            {tiles.map(tile => <Tile key={tile.id} id={tile.id} faceColor={tile.color} />)}
        </Card>
    );
}