// Tools
import { API_URL } from '../../../../init/constants';

// Types
import { editMessagesContract } from './types';

export const editMessage: editMessagesContract = async ({ id, body }) => {
    const response = await fetch(`${API_URL}/messages/${id}`, {
        method:  'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (response.status !== 201) {
        throw new Error('edit failed');
    }

    const result = await response.json();

    return result;
};
