// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, Registation as RegistationForm } from '../../components';

// Styles
import { Container } from './styles';

const Registration: FC = () => {
    return (
        <Container>
            <RegistationForm />
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Registration />
    </ErrorBoundary>
);
