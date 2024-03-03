import React from 'react';
import styles from './Card.module.scss';
import cn from 'classnames';

export const Card = ({children, className, ...props}) => {
    return (
        <div className={cn(styles.card, className)} {...props}>
            {children}
        </div>
    );
}