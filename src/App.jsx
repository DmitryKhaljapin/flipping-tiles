import React from 'react';
import { GameBoard } from './components/GameBoard/GameBoard';
import { Header } from './Layout/Header/Header';
import { Main } from './Layout/Main/Main';
import { Footer } from './Layout/Footer/Footer';
import { RoundBanner, ModulWindow } from './components/UI';
import { useSelector, useDispatch } from 'react-redux';
import { startTheGameAction, resetDispperedAction, clearSelectedTilesListAction, resetRoundCounterAction } from '@/store/actions';

export const App = () => {

    const gameStatus = useSelector(state => state.game.gameStatus);
    const roundCounter = useSelector(store => store.round.roundCounter);
    const dispatch = useDispatch();
    
    function start() {
        dispatch(startTheGameAction());
    }

    function restart() {
        dispatch(resetRoundCounterAction());
        dispatch(clearSelectedTilesListAction());
        dispatch(resetDispperedAction());
        dispatch(startTheGameAction());
    }

    let mainContent;

    switch (gameStatus) {
        case 'beforeStart': {
            mainContent = <ModulWindow 
                message={<><p>Graet job!!!</p><p>You finished the game at round <span style={{fontSize: '3rem'}}>{roundCounter}</span></p></>}
                buttonText={'play again'}
                buttonAction={restart}
            />
            break;
        }
        case 'started': {
            mainContent = <GameBoard />
            break;
        }
        case 'finished': {
            mainContent = <ModulWindow 
                message={<><p>Graet job!!!</p><p>You finished the game at round <span style={{fontSize: '3rem'}}>{roundCounter}</span></p></>}
                buttonText={'play again'}
                buttonAction={restart}
            />
            break;
        }
    } 

    return (
        <div className='wrapper'>
            <Header>
                <RoundBanner />
            </Header>
            <Main>
                {mainContent}
            </Main>
            <Footer>
                <a href={'https://github.com/DmitryKhaljapin/flipping-tiles'} target="_blank">by DmitriX</a>
            </Footer>
        </div>
    );
}