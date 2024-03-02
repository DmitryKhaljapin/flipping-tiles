import React from 'react';
import stlyes from './ModalWindow.module.scss';
import { Card, Button } from '../';
import { Backdrop } from './Backdrop/Backdrop';

export const ModulWindow = ({message}) => {
    return (
        <div>
            <Backdrop />
            <Card className={stlyes.modal}>
                <p className={stlyes.message}>{message}</p>
                <Button>Retry</Button>
            </Card>
        </div>
    );
}
