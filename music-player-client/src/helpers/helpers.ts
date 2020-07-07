export const trimString = (string: string): string => {
    if (string.length > 18) {
        return string.slice(0, 15).trim().concat('...');
    }
    return string;
};

