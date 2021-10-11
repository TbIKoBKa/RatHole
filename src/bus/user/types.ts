// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
export type UserId = string | null
export type Username = string | null

export type UserState = {
    id: UserId
    username: Username
}

// Contracts
export type SetUserContract = CaseReducer<UserState, PayloadAction<UserState>>
