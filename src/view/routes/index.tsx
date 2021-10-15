// Core
import React, { FC, Suspense, useEffect } from 'react';
import { useTogglersRedux } from '../../bus/client/togglers';
import { useUser } from '../../bus/user';

// Hooks
import { useErrors } from '../../bus/client/errors';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Components
import { Alert, Stack } from '@mui/material';

// Elements
import { Spinner } from '../elements';

export const Routes: FC = () => {
    const { togglersRedux: { isLogged, isUserFetching }} = useTogglersRedux();
    const { refreshUser } = useUser();
    const { errors, unsetControlledErrorAction } = useErrors();

    useEffect(() => {
        refreshUser();
    }, []);

    // useEffect(() => {
    //     setControlledErrorAction({ data: 'data', errorId: '0', message: 'message', name: 'error', statusCode: 404 });
    //     setControlledErrorAction({ data: 'data', errorId: '1', message: 'message2', name: 'error', statusCode: 404 });
    // }, []);

    if (isUserFetching) {
        return <Spinner />;
    }

    return (
        <Suspense fallback = { <Spinner /> }>
            { errors.length > 0 && (
                <Stack
                    sx = {{
                        position: 'absolute',
                        zIndex:   1000,
                    }}>
                    {errors.map((error) => (
                        <Alert
                            id = { error.errorId }
                            severity = 'error'
                            sx = {{
                                backgroundColor: '#0f72d4',
                                border:          '4px solid #ef5350',
                                marginBottom:    '6px',
                                color:           'white',
                            }}
                            onClose = { () => { unsetControlledErrorAction({ errorId: error.errorId }); } }>
                            {error.message}
                        </Alert>
                    ))}
                </Stack>
            ) }
            { isLogged ? <Private /> : <Public /> }
        </Suspense>
    );
};
