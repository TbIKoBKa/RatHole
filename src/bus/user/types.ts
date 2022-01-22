// Types
export type UserId = string | null
export type Username = string | null

export type UserState = {
    _id: UserId
    username: Username
}

// Contracts
export type SetUserContract = (payload: UserState) => void
export type RefreshUserContract = () => Promise<void>
export type RegisterUserContract = (username: Username) => Promise<void>
export type ResetUserContract = () => void

// Context
export type UserContextType = {
    userState: UserState,
    setUser: SetUserContract,
    refreshUser: RefreshUserContract,
    registerUser: RegisterUserContract,
    resetUser: ResetUserContract,
}
