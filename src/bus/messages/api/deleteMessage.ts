// Tools
import { API_URL } from '../../../init/constants';

// Types
import { deleteMessageContract } from './types';

export const deleteMessage: deleteMessageContract = async ({ id }) => {
    const response = await fetch(`${API_URL}/messages/${id}`, {
        method:  'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('delete failed');
    }

    const result = await response.json();

    return result;
};
