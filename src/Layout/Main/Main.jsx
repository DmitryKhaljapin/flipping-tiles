import React from 'react'
import styles from './Main.module.scss';

export const Main = ({children}) => {
    return (
        <main className={styles.main}>{children}</main>
    )
}