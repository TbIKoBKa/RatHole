// Types
import { MessagesState, Message } from '../types';

export type CreateMessageState = {
    body: {
        text: Message['text'],
        username: Message['username'],
    }
}

export type EditMessageState = {
    id: Message['_id'],
    body: {
        text: Message['text'],
    }
}

export type DeleteMessageState = {
    id: Message['_id']
}

// Contracts
export type fetchMessagesContract = () => Promise<MessagesState>
export type editMessagesContract = (options: EditMessageState) => Promise<Message>
export type deleteMessageContract = (options: DeleteMessageState) => Promise<boolean>
export type createMessageContract = (options: CreateMessageState) => Promise<Message>
