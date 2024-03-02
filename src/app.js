import React from 'react';
import { GameBoard } from './components/GameBoard/GameBoard';
import { Header } from './Layout/Header/Header';
import { Main } from './Layout/Main/Main';
import { Footer } from './Layout/Footer/Footer';

export const App = () => {
    return (
        <div className='wrapper'>
            <Header></Header>
            <Main>
                <GameBoard />
            </Main>
            <Footer>
                <a href={'https://github.com/DmitryKhaljapin/flipping-tiles'} target="_blank">by DmitriX</a>
            </Footer>
        </div>
    );
}