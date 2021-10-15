// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../../tools/hooks';
import { useTogglersRedux } from '../togglers';

export type DeleteState = {
    id: string | null
}

type SetDeleteMessage = PayloadAction<DeleteState>
const initialState: DeleteState = { id: null };

// Slice
export const deleteSlice = createSlice({
    name:     'delete',
    initialState,
    reducers: {
        setDeleteMessage:   (state, action: SetDeleteMessage) => ({ ...state, ...action.payload }),
        resetDeleteMessage: () => initialState,
    },
});

// Interfaces
export const deleteActions = deleteSlice.actions;
export default deleteSlice.reducer;

export const useDelete = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => ({
        deleteState: state.deleteReducer,
        isDeleting:  state.togglers.isDeletingMessage,
    }));
    const { setTogglerAction } = useTogglersRedux();

    return {
        ...selector,
        setDeleteMessage: (message: DeleteState) => {
            setTogglerAction({ type: 'isDeletingMessage', value: true });
            dispatch(deleteActions.setDeleteMessage(message));
        },
        resetDelete: () => {
            dispatch(deleteActions.resetDeleteMessage());
            setTogglerAction({ type: 'isDeletingMessage', value: false });
        },
    };
};
