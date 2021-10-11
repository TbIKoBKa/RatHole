// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { UserState } from './types';

// Reducers
import * as reducers from './reducers';

const initialState: UserState = {
    id:       null,
    username: null,
};

export const userSlice = createSlice({
    name:     'user',
    initialState,
    reducers: reducers,
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
