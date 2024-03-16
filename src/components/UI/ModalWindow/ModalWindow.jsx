import React from 'react';
import stlyes from './ModalWindow.module.scss';
import { Card, Button } from '..';
import { Backdrop } from './Backdrop/Backdrop';
import { createPortal } from 'react-dom'

export const ModulWindow = ({message, buttonText, buttonAction}) => {
    return (
        <>
            {createPortal(<Backdrop />, document.getElementById('backdrop'))}
            {createPortal(<Card className={stlyes.modal}>
                {message}
                <Button onClick={buttonAction}>{buttonText}</Button>
            </Card>, document.getElementById('modal'))}
        </>
    );
}
