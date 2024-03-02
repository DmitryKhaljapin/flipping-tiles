import React from 'react';
import { GameBoard } from './components/GameBoard/GameBoard';
import { Header } from './Layout/Header/Header';

export const App = () => {
    return (
        <div className='wrapper'>
            <Header></Header>
            <GameBoard />
        </div>
    );
}