// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../../tools/hooks';

export type InputState = {
    text: string | null
}

type SetInputMessage = PayloadAction<InputState>
const initialState: InputState = { text: null };

// Slice
export const inputSlice = createSlice({
    name:     'input',
    initialState,
    reducers: {
        setInputMessage:   (state, action: SetInputMessage) => ({ ...state, ...action.payload }),
        resetInputMessage: () => initialState,
    },
});

// Interfaces
export const inputActions = inputSlice.actions;
export default inputSlice.reducer;

export const useInputMessage = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => ({
        inputState: state.input,
    }));

    return {
        ...selector,
        setInputMessage:   (message: InputState) => dispatch(inputActions.setInputMessage(message)),
        resetInputMessage: () => dispatch(inputActions.resetInputMessage()),
    };
};
