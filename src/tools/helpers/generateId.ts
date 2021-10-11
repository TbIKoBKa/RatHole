// Core
import { v4 } from 'uuid';

export const generateId = () => v4().slice(0, 6)
    .toUpperCase();
