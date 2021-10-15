// Core
import React, { FC } from 'react';

// Hooks
import { useDelete } from '../../../bus/client/delete';
import { useMessages } from '../../../bus/messages';

// Components
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

export const DeleteDialog: FC = () => {
    const { deleteMessageAction } = useMessages();
    const { resetDelete, isDeleting  } = useDelete();

    return (
        <Dialog
            aria-describedby = 'alert-dialog-description'
            aria-labelledby = 'alert-dialog-title'
            open = { isDeleting }
            onClose = { resetDelete }>
            <DialogTitle id = 'alert-dialog-title'>
                Confirmation
            </DialogTitle>
            <DialogContent>
                <DialogContentText id = 'alert-dialog-description'>
                    Are you sure to delete message?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick = { resetDelete }>Disagree</Button>
                <Button
                    autoFocus
                    onClick = { deleteMessageAction }>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
};
