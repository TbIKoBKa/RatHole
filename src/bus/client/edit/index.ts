// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../../tools/hooks';
import { useTogglersRedux } from '../togglers';

export type EditState = {
    id?: string | null
    text: string | null
}

type SetEditMessage = PayloadAction<EditState>
const initialState: EditState = { id: null, text: null };

// Slice
export const editSlice = createSlice({
    name:     'edit',
    initialState,
    reducers: {
        setEditMessage:   (state, action: SetEditMessage) => ({ ...state, ...action.payload }),
        resetEditMessage: () => initialState,
    },
});

// Interfaces
export const editActions = editSlice.actions;
export default editSlice.reducer;

export const useEdit = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => ({
        editState: state.edit,
        isEditing: state.togglers.isEditingMessage,
    }));
    const { setTogglerAction } = useTogglersRedux();

    return {
        ...selector,
        setEditMessage: (message: EditState) => {
            setTogglerAction({ type: 'isEditingMessage', value: true });
            dispatch(editActions.setEditMessage(message));
        },
        resetEdit: () => {
            dispatch(editActions.resetEditMessage());
            setTogglerAction({ type: 'isEditingMessage', value: false });
        },
    };
};
