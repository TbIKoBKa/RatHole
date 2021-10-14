// Types
import { Key } from '../../bus/client/keyboard';

export const getRequiredKeyCode = ({ keyCode, capitalizedKeyCode }: Key, isCapitalize: boolean) => {
    if (typeof capitalizedKeyCode === 'boolean') {
        if (!capitalizedKeyCode || !isCapitalize) {
            return keyCode;
        }

        return keyCode.toUpperCase();
    }
    if (isCapitalize) {
        return capitalizedKeyCode;
    }

    return keyCode;
};
