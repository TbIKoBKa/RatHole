// Core
import React, { FC, useContext } from 'react';

// Contexts
import { TogglersContext } from '../../../bus/client/togglers';
import { DeleteContext } from '../../../bus/client/delete';
import { MessagesContext } from '../../../bus/messages';

// Components
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

export const DeleteDialog: FC = () => {
    const { togglersState: { isDeletingMessage }} = useContext(TogglersContext);
    const { deleteMessageAsync } = useContext(MessagesContext);
    const { resetDeleteMessage } = useContext(DeleteContext);

    return (
        <Dialog
            aria-describedby = 'alert-dialog-description'
            aria-labelledby = 'alert-dialog-title'
            open = { isDeletingMessage }
            onClose = { resetDeleteMessage }>
            <DialogTitle id = 'alert-dialog-title'>
                Confirmation
            </DialogTitle>
            <DialogContent>
                <DialogContentText id = 'alert-dialog-description'>
                    Are you sure to delete message?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick = { resetDeleteMessage }>Disagree</Button>
                <Button
                    autoFocus
                    onClick = { deleteMessageAsync }>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
};
