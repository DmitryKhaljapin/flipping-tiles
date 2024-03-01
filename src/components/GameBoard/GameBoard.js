import React from 'react';
import { Card } from '../UI'
import styles from './GameBoard.module.scss';
import { Tile } from '../Tile/Tile';

export const GameBoard = ({children}) => {
    return (
        <Card className={styles['game-board']}>
            {new Array(16).fill(<Tile />)}
        </Card>
    );
}