
// Core
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';

// Bus
import { RootProvider } from './bus';

// Init
import {
    history as routerHistory,
    registerServiceWorker,
} from './init';

// View
import { App } from './view';

// Assets
import { initIconsLibrary } from './assets';

initIconsLibrary();

const Root = () => {
    return (
        <RootProvider>
            <Router history = { routerHistory }>
                <App />
            </Router>
        </RootProvider>
    );
};

render(<Root />, document.getElementById('app'));

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    registerServiceWorker();
}
