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
export type SetMessagesContract = (payload: MessagesState) => void
export type AddMessageContract = (payload: Message) => void
export type EditMessageContract = (payload: Message) => void
export type DeleteMessageContract = (messageId: string) => void

export type FetchMessagesContract = () => Promise<any>
export type DeleteMessageAsyncContract = () => Promise<any>
export type SendMessageContract = () => Promise<any>

// Context
export type MessagesContextType = {
    messagesState: MessagesState,
    setMessages: SetMessagesContract,
    addMessage: AddMessageContract,
    editMessage: EditMessageContract,
    deleteMessage: DeleteMessageContract,
    fetchMessages: FetchMessagesContract,
    deleteMessageAsync: DeleteMessageAsyncContract,
    sendMessage: SendMessageContract,
}
