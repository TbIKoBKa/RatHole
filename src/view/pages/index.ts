// Core
import { lazy } from 'react';

// Pages
export const Registration = lazy(() => import(/* webpackChunkName: "Registation" */ './Registation'));
export const Chat = lazy(() => import(/* webpackChunkName: "Chat" */ './Chat'));
