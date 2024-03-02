import React from 'react';
import styles from './Header.module.scss';
import { Button, RoundBanner } from '@/components/UI'

export const Header = () => {
    return (
        <header className={styles.header}>
            <RoundBanner className={styles.banner} />
            <Button>Restart</Button>
        </header>
    );
}