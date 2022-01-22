// Tools
import { API_URL } from '../../../init/constants';

// Types
import { createMessageContract } from './types';

export const createMessage: createMessageContract = async ({ body }) => {
    const response = await fetch(`${API_URL}/messages`, {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (response.status !== 201) {
        throw new Error('create failed');
    }

    const result = await response.json();

    return result;
};
