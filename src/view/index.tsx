// Core
import React, { FC, useEffect, useCallback, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

// Context
import { TogglersContext } from '../bus/client/togglers';

// Containers
import { Routes } from './routes';

// Hooks
import { useLocalStorage } from '../tools/hooks';

// Assets
import { GlobalStyles, defaultTheme } from '../assets';

// Styles
import { AppContainer } from './styles';

export const App: FC = () => {
    const { setToggler } = useContext(TogglersContext);
    const [ isDefaultTheme ] = useLocalStorage('isDefaultTheme', true);

    const setOnlineStatusHanlder = useCallback(() => void setToggler({
        type:  'isOnline',
        value: navigator.onLine,
    }), [ setToggler ]);

    useEffect(() => {
        setOnlineStatusHanlder();
        window.addEventListener('online', setOnlineStatusHanlder);
        window.addEventListener('offline', setOnlineStatusHanlder);
    }, []);

    return (
        <ThemeProvider theme = { isDefaultTheme ? defaultTheme : defaultTheme } >
            <GlobalStyles />
            <AppContainer>
                <Routes />
            </AppContainer>
        </ThemeProvider>
    );
};
