// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';

const Chat: FC = () => {
    return (
        <div>
            <p>CHAT</p>
        </div>
    );
};

export default () => (
    <ErrorBoundary>
        <Chat />
    </ErrorBoundary>
);
