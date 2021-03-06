// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
export type Message = {
    _id: string,
    username: string,
    text: string,
    createdAt: string,
    updatedAt: string,
};
export type MessagesState = Array<Message>

// Contracts
export type SetMessagesContract = CaseReducer<MessagesState, PayloadAction<MessagesState>>
export type AddMessageContract = CaseReducer<MessagesState, PayloadAction<Message>>
export type EditMessageContract = CaseReducer<MessagesState, PayloadAction<Message>>
export type DeleteMessageContract = CaseReducer<MessagesState, PayloadAction<string>>
