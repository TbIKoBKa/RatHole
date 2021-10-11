// Core
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { Registration } from '../pages';

export const Public: FC = () => {
    return (
        <Switch>
            <Route
                exact
                path = '/register'>
                <Registration />
            </Route>
            <Redirect to = '/register' />
        </Switch>
    );
};
