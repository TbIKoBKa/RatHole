import { correctDateValue } from '.';

export const getMessageTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${correctDateValue(hours)}:${correctDateValue(minutes)}`;
};
