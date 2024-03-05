import React from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

export const Button = ({children, className, ...props}) => {
    return (
        <button className={cn(styles.button, className)} {...props}>{children}</button>
    );
}