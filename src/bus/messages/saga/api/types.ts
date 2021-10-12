// Types
import { MessagesState, Message } from '../../types';
import { EditMessageState, CreateMessageState, DeleteMessageState } from '../types';

// Contracts
export type fetchMessagesContract = () => Promise<MessagesState>
export type editMessagesContract = (options: EditMessageState) => Promise<Message>
export type deleteMessageContract = (options: DeleteMessageState) => Promise<boolean>
export type createMessageContract = (options: CreateMessageState) => Promise<Message>
