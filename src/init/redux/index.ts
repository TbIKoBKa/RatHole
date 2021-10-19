// Core
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import togglers from '../../bus/client/togglers';
import errors from '../../bus/client/errors';
import edit from '../../bus/client/edit';
import deleteReducer from '../../bus/client/delete';
import input from '../../bus/client/input';
import keyboard from '../../bus/client/keyboard';
import messages from '../../bus/messages/slice';
import user from '../../bus/user/slice';

// Middleware
import { middleware, sagaMiddleware } from './middleware';

// Saga
import { rootSaga } from './rootSaga';

export const store = configureStore({
    reducer: {
        togglers,
        errors,
        edit,
        input,
        deleteReducer,
        keyboard,
        messages,
        user,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga);
