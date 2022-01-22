// Constants
import { API_URL } from '../../../init/constants';

// Types
import { UserId } from '../types';

export const fetchUser = async (userId: UserId) => {
    const response = await fetch(`${API_URL}/users/refresh/${userId}`, {
        method:  'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status !== 200) {
        throw new Error('refresh failed');
    }

    const result = await response.json();

    return result;
};
