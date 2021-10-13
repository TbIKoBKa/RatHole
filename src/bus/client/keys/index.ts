// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../../tools/hooks';

export type Key = string
export type KeysState = Key[]

type ToggleKey = PayloadAction<Key>
const initialState: KeysState = [];

// Slice
export const keysSlice = createSlice({
    name:     'keys',
    initialState,
    reducers: {
        toggleKey: (state, action: ToggleKey) => {
            if (state.includes(action.payload)) {
                return state.filter((key) => key !== action.payload);
            }

            return [ ...state, action.payload ];
        },
        resetkeys: () => initialState,
    },
});

// Interfaces
export const keysActions = keysSlice.actions;
export default keysSlice.reducer;

export const useKeys = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => ({
        activeKeys: state.keys,
    }));

    return {
        ...selector,
        toggleKey: (key: Key) => {
            dispatch(keysActions.toggleKey(key));
        },
        resetKeys: () => {
            dispatch(keysActions.resetkeys());
        },
    };
};
