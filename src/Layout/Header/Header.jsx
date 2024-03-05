import React from 'react';
import styles from './Header.module.scss';
import { Button, RoundBanner } from '@/components/UI';
import { resetRoundCounterAction, clearSelectedTilesListAction, resetDispperedAction } from '@/store/Reducers'
import { useDispatch } from 'react-redux';

export const Header = () => {

    const dispatch = useDispatch();

    function resetHandler() {
        dispatch(resetRoundCounterAction());
        dispatch(clearSelectedTilesListAction());
        dispatch(resetDispperedAction());
    }
    
    return (
        <header className={styles.header}>
            <RoundBanner className={styles.banner} />
            <Button onClick={resetHandler}>Restart</Button>
        </header>
    );
}