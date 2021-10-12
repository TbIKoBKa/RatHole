export const isEqualDays = (dateOne: Date, dateTwo: Date) => {
    return dateOne.toLocaleDateString() === dateTwo.toLocaleDateString();
};
