// Core
import React, { FC, Suspense, useEffect, useContext } from 'react';

// Context
import { TogglersContext } from '../../bus/client/togglers';
import { UserContext } from '../../bus/user';
import { ErrorsContext } from '../../bus/client/errors';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Components
import { Alert, Stack } from '@mui/material';

// Elements
import { Spinner } from '../elements';

export const Routes: FC = () => {
    const { togglersState: { isUserFetching, isUserRegistrating, isLogged }} = useContext(TogglersContext);
    const { refreshUser } = useContext(UserContext);
    const { errorsState, unsetError } = useContext(ErrorsContext);

    useEffect(() => {
        refreshUser();
    }, []);

    if (isUserFetching || isUserRegistrating) {
        return <Spinner />;
    }

    return (
        <Suspense fallback = { <Spinner /> }>
            {errorsState.length > 0 && (
                <Stack
                    sx = {{
                        position: 'absolute',
                        zIndex:   1000,
                    }}>
                    {errorsState.map((error) => (
                        <Alert
                            key = { error.id }
                            severity = 'error'
                            sx = {{
                                backgroundColor: '#0f72d4',
                                border:          '4px solid #ef5350',
                                marginBottom:    '6px',
                                color:           'white',
                            }}
                            onClose = { () => { unsetError({ id: error.id }); } }>
                            {error.message}
                        </Alert>
                    ))}
                </Stack>
            ) }
            { isLogged ? <Private /> : <Public /> }
        </Suspense>
    );
};
