// Tools
import { API_URL } from '../../../init/constants';

import { fetchMessagesContract } from './types';

export const fetchMessages: fetchMessagesContract = async () => {
    const response = await fetch(`${API_URL}/messages`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('fetch failed');
    }

    const result = await response.json();

    return result.reverse();
};
