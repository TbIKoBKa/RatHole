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
    const { togglersRedux: { isLogged, isUserFetching, isUserRegistrating }} = useTogglersRedux();
    const { refreshUser } = useUser();
    const { errors, unsetControlledErrorAction } = useErrors();

    useEffect(() => {
        refreshUser();
    }, []);

    if (isUserFetching || isUserRegistrating) {
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
                            key = { error.id }
                            severity = 'error'
                            sx = {{
                                backgroundColor: '#0f72d4',
                                border:          '4px solid #ef5350',
                                marginBottom:    '6px',
                                color:           'white',
                            }}
                            onClose = { () => { unsetControlledErrorAction({ id: error.id }); } }>
                            {error.message}
                        </Alert>
                    ))}
                </Stack>
            ) }
            { isLogged ? <Private /> : <Public /> }
        </Suspense>
    );
};
