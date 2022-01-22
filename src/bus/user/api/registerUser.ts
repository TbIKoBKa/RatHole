// Constants
import { API_URL } from '../../../init/constants';

// Types
import { Username } from '../types';

export const registerUser = async (username: Username) => {
    const response = await fetch(`${API_URL}/users/register`, {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
    });

    if (response.status !== 201) {
        throw new Error('registration failed');
    }

    const result = await response.json();

    return result;
};
