// Core
import React, { FC, Suspense, useEffect } from 'react';
import { useTogglersRedux } from '../../bus/client/togglers';
import { useUser } from '../../bus/user';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Elements
import { Spinner } from '../elements';

export const Routes: FC = () => {
    const { togglersRedux: { isLogged, isUserFetching }} = useTogglersRedux();
    const { refreshUser } = useUser();

    useEffect(() => {
        refreshUser();
    }, []);

    if (isUserFetching) {
        return <Spinner />;
    }

    return (
        <Suspense fallback = { <Spinner /> }>
            { isLogged ? <Private /> : <Public /> }
        </Suspense>
    );
};
